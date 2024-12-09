
# app/controllers/detection_controller

from app import db
from math import radians
from sqlalchemy import func
from app.models import User,CCTV, Predict, Images, ResultPredict, StatusEnum,RoleEnum
from flask import request, jsonify
from sqlalchemy.orm import joinedload
from app.helpers.logger import setup_logger
from app.utils.kafka_utils import produce_event
from sqlalchemy.exc import SQLAlchemyError
import math
from sqlalchemy import Float
from datetime import datetime


logger = setup_logger("detection")


def get_owner_id_by_cctv_ip(cctv_ip):
    try:
        cctv = db.session.query(CCTV).options(joinedload(CCTV.user)).filter_by(cctv_ip=cctv_ip).first()
        
        if not cctv:
            return None
        return cctv.user_id
    except Exception as e:
        print(f"Error retrieving owner ID: {e}")
        return None
    
    
def create_report(owner_id, array_image, description):
    try:
        logger.info("Starting to create report...")

        if not owner_id or not array_image or not description:
            logger.error("Invalid input: Missing required fields.")
            return jsonify({"error": "Invalid input, all fields are required"}), 400

        # Cari user dengan role OWNER
        logger.info(f"Fetching owner with ID: {owner_id}")
        owner = db.session.query(User).filter(User.id == owner_id, User.role == RoleEnum.OWNER).first()
        if not owner or not owner.lat or not owner.lang:
            logger.error("Owner not found or coordinates missing.")
            return jsonify({"error": "Owner not found or invalid coordinates"}), 404

        # Ambil nilai koordinat OWNER
        owner_lat = float(owner.lat)
        owner_lang = float(owner.lang)
        logger.info(f"Owner coordinates: lat={owner_lat}, lang={owner_lang}")

        # Cari POLICE dalam radius 20 km menggunakan SQLAlchemy func
        logger.info("Finding nearby police within 20km radius...")
        nearby_police = db.session.query(
            User.id,
            User.name,
            (6371 * func.acos(
                func.cos(func.radians(owner_lat)) * func.cos(func.radians(User.lat.cast(Float))) *
                func.cos(func.radians(User.lang.cast(Float)) - func.radians(owner_lang)) +
                func.sin(func.radians(owner_lat)) * func.sin(func.radians(User.lat.cast(Float)))
            )).label("distance")
        ).filter(
            User.role == RoleEnum.POLICE,
            User.lat.isnot(None),
            User.lang.isnot(None),
            (6371 * func.acos(
                func.cos(func.radians(owner_lat)) * func.cos(func.radians(User.lat.cast(Float))) *
                func.cos(func.radians(User.lang.cast(Float)) - func.radians(owner_lang)) +
                func.sin(func.radians(owner_lat)) * func.sin(func.radians(User.lat.cast(Float)))
            )) <= 20
        ).all()

        if not nearby_police:
            logger.warning("No police found within 20km radius.")
            return jsonify({"error": "No police found within 20km radius"}), 404

        # Buat laporan Predict
        logger.info("Creating predict entry...")
        predict = Predict(deskripsi=f"Telah terjadi perampokan di {owner.address} dari korban {owner.name}")
        db.session.add(predict)
        db.session.commit()
        logger.info(f"Predict entry created with ID: {predict.id}")

        # Simpan array image ke tabel Images
        logger.info("Saving images...")
        for image_name in array_image:
            image = Images(name_image=image_name, predict_id=predict.id)
            db.session.add(image)
        db.session.commit()
        logger.info("Images saved successfully.")

        # Buat ResultPredict
        logger.info("Creating ResultPredict entry...")
        result_predict = ResultPredict(
            user_id=owner.id,
            predict_id=predict.id,
            status=StatusEnum.PENDING
        )
        db.session.add(result_predict)
        db.session.commit()
        logger.info(f"ResultPredict entry created with ID: {result_predict.id}")

        # Laporan akhir
        logger.info("Building final report...")
        report = {
            "report_id": str(predict.id),
            "owner_id": str(owner.id),
            "address": str(owner.address),
            "description": description,
            "images": array_image,
            "created_at": datetime.now().isoformat(),
            "police_in_radius": [
                {"id": str(police.id), "name": police.name, "distance_km": round(police.distance, 2)}
                for police in nearby_police
            ]
        }
        produce_event("knife-detection-notifications", key="alert", value=json.dumps({
            "user_id": owner.id,
            "report": report
        }))
        logger.info("Report sent to Kafka successfully.")

        logger.info("Report created successfully.")
        return jsonify({"success": True, "report": report}), 201

    except SQLAlchemyError as e:
        logger.error(f"Database error occurred: {str(e)}")
        db.session.rollback()
        return jsonify({"error": "Database error occurred"}), 500
    except Exception as e:
        logger.error(f"An unexpected error occurred: {str(e)}")
        db.session.rollback()
        return jsonify({"error": "An unexpected error occurred"}), 500
   
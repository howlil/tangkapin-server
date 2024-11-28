import cv2
import numpy as np
import tensorflow as tf
from ultralytics import YOLO
from dotenv import load_dotenv
import os
from supabase import create_client, Client
from datetime import datetime
import uuid
from io import BytesIO
from app.utils.logger import setup_logger
from app import create_app
from app.controllers.detection_controller import get_owner_id_by_cctv_ip
from app.controllers.detection_controller import create_report

load_dotenv()
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
CCTV_IP = os.getenv("CCTV_IP")

app = create_app()
logger = setup_logger("detction")
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
is_detection_active = True

def save_detection_images(owner_id, image, label=""):
    try:
        # Generate timestamp and unique filename
        timestamp = datetime.now().strftime("%Y%m%d_%H%M")
        unique_id = str(uuid.uuid4())
        filename = f"{label}_{unique_id}.jpg"

        # Encode the image to bytes directly in memory
        _, buffer = cv2.imencode('.jpg', image)
        file_bytes = BytesIO(buffer)

        # Define the path in Supabase storage
        supabase_path = f"{owner_id}/{timestamp}/{filename}"

        # Upload the image to Supabase
        supabase.storage.from_("foto-maling").upload(supabase_path, file_bytes.getvalue())

        # Get the public URL of the uploaded image
        public_url = supabase.storage.from_("foto-maling").get_public_url(supabase_path)

        # Return the public URL
        return public_url
    except Exception as e:
        print(f"Error saving or uploading image: {e}")
        return None
    
    
def load_models(yolo_path, fast_rcnn_path):
    try:
        yolo_model = YOLO(yolo_path)
        fast_rcnn_model = tf.keras.models.load_model(fast_rcnn_path)
        return yolo_model, fast_rcnn_model
    except Exception as e:
        raise

def process_frame(frame, yolo_model, fast_rcnn_model):
    processed_frame = cv2.resize(frame, (224, 224))
    normalized_frame = processed_frame / 255.0
    yolo_results = yolo_model(frame)
    fast_rcnn_pred = fast_rcnn_model.predict(
        np.expand_dims(normalized_frame, axis=0),
        verbose=0
    )[0]
    return yolo_results, fast_rcnn_pred



def draw_detections(frame, yolo_results, fast_rcnn_pred, owner_id):
    images_captured = []

    # Knife Detection Logic
    knife_prob = float(fast_rcnn_pred)
    label = f"Knife Probability: {knife_prob:.2f}"
    cv2.putText(frame, label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    if knife_prob > 0.8:  # Threshold for Knife Detection
        cv2.putText(frame, "WARNING: Knife Detected!", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        image_url = save_detection_images(owner_id, frame, label="Knife")
        if image_url:
            images_captured.append(image_url)

    return frame, images_captured





def real_time_detection(yolo_path, fast_rcnn_path, camera_source):
    logger.info("Starting real-time detection...")
    camera_source = f"{CCTV_IP}/video"
    
    with app.app_context():
        logger.info(f"Getting owner ID for CCTV IP: {CCTV_IP}")
        owner_id = get_owner_id_by_cctv_ip(CCTV_IP)
        
        if not owner_id:
            logger.error("Owner ID not found for the provided CCTV IP")
            print("Owner ID not found")
            return
        logger.info(f"Owner ID retrieved: {owner_id}")

    global is_detection_active
    
    logger.info("Loading models...")
    yolo_model, fast_rcnn_model = load_models(yolo_path, fast_rcnn_path)
    logger.info("Models successfully loaded.")

    cap = cv2.VideoCapture(camera_source)
    
    if not cap.isOpened():
        logger.error("Unable to open video source.")
        print("Unable to open video source")
        return
    
    logger.info("Video source opened successfully.")
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
    all_images_captured = []  # List untuk menyimpan semua URL gambar

    try:
        while is_detection_active:
            logger.debug("Reading frame from camera...")
            ret, frame = cap.read()
            if not ret:
                logger.error("Failed to read frame from camera.")
                break

            # Process the frame
            logger.debug("Processing frame with models...")
            yolo_results, fast_rcnn_pred = process_frame(
                frame,
                yolo_model,
                fast_rcnn_model
            )
            logger.debug("Frame processing completed.")

            # Detect and draw results
            logger.debug("Running detection...")
            frame, images_captured = draw_detections(
                frame,
                yolo_results,
                fast_rcnn_pred,
                owner_id
            )
            logger.info(f"{len(images_captured)} images captured in this frame.")

            # Tambahkan URL gambar Knife Detected ke dalam list
            if len(all_images_captured) < 5:
                for image_url in images_captured:
                    if len(all_images_captured) < 5:
                        all_images_captured.append(image_url)
                        logger.info(f"Image URL added: {image_url}")
                    else:
                        break

            # Buat laporan setelah mendapatkan 5 gambar
            if len(all_images_captured) >= 5:
                logger.info("5 images captured. Creating report...")
                with app.app_context():
                    create_report(owner_id, all_images_captured[:5],"report succes")
                logger.info("Report created successfully.")
                is_detection_active = False  # Hentikan deteksi
                break
            

            # Stop detection manually by pressing 'q'
            if cv2.waitKey(1) & 0xFF == ord('q'):
                logger.warning("Manual stop detected ('q' pressed).")
                break
    except Exception as e:
        logger.error(f"Error during detection: {e}")
        print(f"Error during detection: {e}")
    finally:
        logger.info("Releasing camera resources and stopping detection.")
        cap.release()
        cv2.destroyAllWindows()
        is_detection_active = False

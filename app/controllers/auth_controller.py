from flask import jsonify
from werkzeug.security import check_password_hash
from app.models import User
from app.helpers.jwt import create_jwt_token


def login_user(data):
    try:
        email = data.get('email')
        password = data.get('password')
        fcm_token = data.get('fcm_token')  # Tambahkan untuk menangkap fcm_token

        if not email or not password:
            return jsonify({
                "error": True,
                "message": "Email and password are required.",
                "data": None
            }), 400

        user = User.query.filter_by(email=email).first()
        if not user or not check_password_hash(user.password, password):
            return jsonify({
                "error": True,
                "message": "Invalid email or password.",
                "data": None
            }), 401

        # Simpan atau perbarui FCM token
        if fcm_token:
            user.fcm_token = fcm_token
            db.session.commit()

        token = create_jwt_token(str(user.id), user.role.name)

        return jsonify({
            "error": False,
            "message": "Login successful.",
            "data": {
                "token": token,
                "role": user.role.name
            }
        }), 200

    except Exception as e:
        return jsonify({
            "error": True,
            "message": "An error occurred while processing the login request.",
            "data": {"details": str(e)} 
        }), 500

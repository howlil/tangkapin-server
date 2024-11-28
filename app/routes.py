from flask import Blueprint, request,jsonify
from app.controllers.auth_controller import login_user
from app.middlewares.auth_middleware import authenticate, authorize

main_bp = Blueprint('main', __name__)




@main_bp.route('/', methods=['GET'])
def home():
    return {
        "message": "API is Ready!",
    }


@main_bp.route('/api/v1//login', methods=['POST'])
def login():
    data = request.get_json()
    return login_user(data)


@main_bp.route('/me', methods=['GET'])
@authenticate 
@authorize("POLICE")
def protected():
    user = request.user 
    return jsonify({
        "error": False,
        "message": "Access granted.",
        "data": {
            "user_id": user["id"],
            "role": user["role"]
        }
    })
from app import create_app
import os
import requests
from dotenv import load_dotenv
from app.utils.detection import real_time_detection
from app.utils.logger import setup_logger
import threading

load_dotenv()
logger = setup_logger("App")
app = create_app()

YOLO_PATH = "app/models/yolov8n.pt"
FAST_RCNN_PATH = "app/models/knife_detector.h5"
OWNER_ID = "a5f286c5-6b98-493d-94c9-f08a594bac2e"
CCTV_IP = os.getenv("CCTV_IP")

def start_real_time_detection():
    """
    Start real-time detection as a background process.
    """
    try:
        logger.info("Starting real-time detection...")
        real_time_detection(YOLO_PATH, FAST_RCNN_PATH, OWNER_ID, CCTV_IP)
    except Exception as e:
        logger.error(f"Error in real-time detection: {e}")



if __name__ == "__main__":
    detection_thread = threading.Thread(target=start_real_time_detection, daemon=True)
    detection_thread.start()
    logger.info("Starting Flask server...")

    app.run(debug=True)

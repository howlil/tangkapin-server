import requests
import os
from app.utils.logger import setup_logger

# Logger
logger = setup_logger("Notification")

# URL API
API_URL = os.getenv("API_URL", "http://localhost:5000/api/v1/alerts")


def notify_alert(owner_id, image_urls, description):
    """
    Mengirim notifikasi ke endpoint API ketika ancaman terdeteksi.
    """
    try:
        response = requests.post(API_URL, json={
            "owner_id": owner_id,
            "image_urls": image_urls,
            "description": description
        })
        if response.status_code == 200:
            logger.info("Alert notification sent successfully.")
        else:
            logger.error(f"Failed to send alert: {response.status_code} - {response.text}")
    except Exception as e:
        logger.error(f"Error sending alert notification: {e}")

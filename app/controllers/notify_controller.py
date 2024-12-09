# app/controllers/notify_controller

from app.utils.kafka_utils import produce_event
import json
from app.helpers.logger import setup_logger
from firebase_admin import messaging
from app.models import User
from sqlalchemy.orm.exc import NoResultFound


logger = setup_logger("Notification")

def get_user_fcm_token(user_id):
    try:
        user = User.query.filter_by(id=user_id).first()
        if user and user.fcm_token:
            return user.fcm_token
        logger.warning(f"No FCM token found for user_id {user_id}")
        return None
    except Exception as e:
        logger.error(f"Error fetching FCM token for user {user_id}: {e}")
        return None

    


def send_fcm_notification(token, title, body, data=None):
    """
    Mengirimkan notifikasi ke perangkat menggunakan Firebase Cloud Messaging (FCM).
    """
    try:
        message = messaging.Message(
            notification=messaging.Notification(
                title=title,
                body=body
            ),
            data=data,  # Data tambahan, seperti report_id, jika diperlukan
            token=token  # Token perangkat penerima
        )
        response = messaging.send(message)
        logger.info(f"FCM notification sent successfully: {response}")
    except Exception as e:
        logger.error(f"Failed to send FCM notification: {e}")
        
        
        
def process_kafka_event():
    """
    Kafka consumer yang memproses event dari Kafka dan mengirimkan notifikasi ke FCM.
    """
    consumer = create_consumer("alert-group")

    def handle_event(key, value):
        try:
            # Parse pesan Kafka
            event = json.loads(value)
            user_id = event["user_id"]
            report = event["report"]

            # Ambil token FCM pengguna berdasarkan user_id
            user_token = get_user_fcm_token(user_id)  # Implementasikan fungsi ini

            if not user_token:
                logger.warning(f"FCM token not found for user {user_id}")
                return

            # Kirim notifikasi melalui FCM
            send_fcm_notification(
                token=user_token,
                title="Perampokan Terdeteksi!",
                body=f"Laporan baru: {report['description']}",
                data={
                    "report_id": report["report_id"],
                    "owner_id": report["owner_id"]
                }
            )
        except Exception as e:
            logger.error(f"Error processing Kafka event: {e}")

    consume_events(consumer, handle_event)
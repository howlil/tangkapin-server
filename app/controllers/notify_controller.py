# app/controllers/notify_controller

from app.utils.kafka_utils import produce_event, create_consumer, consume_events
import json
from app.helpers.logger import setup_logger
from firebase_admin import messaging
from app.models import User
from sqlalchemy.orm.exc import NoResultFound


logger = setup_logger("Notification")

def get_user_fcm_token(user_id):
    """
    Mengambil token FCM pengguna dari database berdasarkan user_id.
    """
    try:
        logger.info(f"Fetching FCM token for user_id: {user_id}")
        user = User.query.filter_by(id=user_id).first()
        if user and user.fcm_token:
            logger.info(f"FCM token found for user_id {user_id}: {user.fcm_token}")
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
        logger.info(f"Preparing FCM notification for token: {token}")
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
    logger.info("Kafka consumer started for topic 'alert-group'.")

    def handle_event(key, value):
        logger.info(f"Kafka event received - Key: {key}, Value: {value}")
        try:
            # Parse pesan Kafka
            event = json.loads(value)
            user_id = event.get("user_id")
            report = event.get("report")

            if not user_id or not report:
                logger.warning("Kafka event missing required data: user_id or report.")
                return

            logger.info(f"Processing event for user_id: {user_id}")

            # Ambil token FCM pengguna berdasarkan user_id
            user_token = get_user_fcm_token(user_id)

            if not user_token:
                logger.warning(f"FCM token not found for user_id {user_id}. Skipping notification.")
                return

            # Kirim notifikasi melalui FCM
            send_fcm_notification(
                token=user_token,
                title="Perampokan Terdeteksi!",
                body=f"Laporan baru: {report.get('description', 'No description available')}",
                data={
                    "report_id": report.get("report_id", ""),
                    "owner_id": report.get("owner_id", "")
                }
            )
            logger.info(f"Notification sent successfully for user_id {user_id}")
        except json.JSONDecodeError as e:
            logger.error(f"Error decoding Kafka event: {e}")
        except Exception as e:
            logger.error(f"Error processing Kafka event: {e}")


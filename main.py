import cv2
import numpy as np
import tensorflow as tf
from ultralytics import YOLO
from app.utils.logger import setup_logger
from app.utils.report_utils import create_report
from dotenv import load_dotenv
import os
from supabase import create_client, Client
from datetime import datetime
import uuid
import io

# Load environment variables
load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

logger = setup_logger("KnifeDetection")


def save_detection_images(owner_id, image, label=""):
    """
    Saves detection image to Supabase bucket 'foto-maling' with a unique filename.
    """
    try:
        # Generate a unique filename
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S%f")
        unique_id = str(uuid.uuid4())
        filename = f"{owner_id}_{label}_{timestamp}_{unique_id}.jpg"

        # Encode image to JPEG
        _, buffer = cv2.imencode('.jpg', image)
        file_bytes = io.BytesIO(buffer)

        # Upload the file to the 'foto-maling' bucket
        supabase.storage.from_("foto-maling").upload(filename, file_bytes.getvalue())

        # Get the public URL of the uploaded file
        public_url = supabase.storage.from_("foto-maling").get_public_url(filename)

        logger.info(f"Image saved to Supabase: {public_url}")
        return public_url
    except Exception as e:
        logger.error(f"Failed to save image to Supabase: {e}")
        return None



def load_models(yolo_path, fast_rcnn_path):
    """
    Loads YOLOv8 and Fast R-CNN models.
    """
    try:
        logger.info("Loading YOLOv8 model...")
        yolo_model = YOLO(yolo_path)
        logger.info("Loading Fast R-CNN model...")
        fast_rcnn_model = tf.keras.models.load_model(fast_rcnn_path)
        logger.info("Models loaded successfully!")
        return yolo_model, fast_rcnn_model
    except Exception as e:
        logger.error(f"Error loading models: {e}")
        raise


def process_frame(frame, yolo_model, fast_rcnn_model):
    """
    Processes a single frame with YOLOv8 and Fast R-CNN models.
    """
    processed_frame = cv2.resize(frame, (224, 224))
    normalized_frame = processed_frame / 255.0

    yolo_results = yolo_model(frame)
    fast_rcnn_pred = fast_rcnn_model.predict(
        np.expand_dims(normalized_frame, axis=0),
        verbose=0
    )[0]

    return yolo_results, fast_rcnn_pred


def draw_detections(frame, yolo_results, fast_rcnn_pred, owner_id):
    """
    Draws detection results on the frame and uploads images to Supabase if threats are detected.
    """
    images_captured = []

    # Draw YOLOv8 detections
    for result in yolo_results:
        boxes = result.boxes
        for box in boxes:
            x1, y1, x2, y2 = box.xyxy[0]
            conf = box.conf[0]

            if conf > 0.8:  # Confidence threshold
                cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 2)
                label = f"Conf: {conf:.2f}"
                cv2.putText(frame, label, (int(x1), int(y1) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)

                cropped_image = frame[int(y1):int(y2), int(x1):int(x2)]
                image_url = save_detection_images(owner_id, cropped_image, label="YOLO")
                if image_url:
                    images_captured.append(image_url)

    # Fast R-CNN predictions
    knife_prob = float(fast_rcnn_pred)
    label = f"Knife Probability: {knife_prob:.2f}"
    cv2.putText(frame, label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    if knife_prob > 0.7:  # Threat threshold
        warning = "WARNING: Knife Detected!"
        cv2.putText(frame, warning, (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

        image_url = save_detection_images(owner_id, frame, label="Knife")
        if image_url:
            images_captured.append(image_url)

    return frame, images_captured


def real_time_detection(yolo_path, fast_rcnn_path, owner_id, camera_source):
    """
    Melakukan deteksi real-time menggunakan YOLOv8 dan Fast R-CNN.
    """
    # Load models
    yolo_model, fast_rcnn_model = load_models(yolo_path, fast_rcnn_path)
    
    logger.info("Starting video capture...")
    cap = cv2.VideoCapture(camera_source)
    
    if not cap.isOpened():
        logger.error("Could not open video stream")
        return
    
    # Set resolusi kamera (opsional)
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
    
    images_captured_count = 0  # Counter untuk jumlah gambar yang disimpan
    
    try:
        while True:
            ret, frame = cap.read()
            if not ret:
                logger.error("Could not read frame")
                break
            
            # Proses frame
            yolo_results, fast_rcnn_pred = process_frame(
                frame, 
                yolo_model, 
                fast_rcnn_model
            )
            
            # Gambar deteksi dan simpan jika ada ancaman
            frame, images_captured = draw_detections(
                frame, 
                yolo_results, 
                fast_rcnn_pred, 
                owner_id
            )
            
            # Tambahkan jumlah gambar yang berhasil disimpan
            images_captured_count += len(images_captured)
            
            # Jika gambar yang tersimpan sudah mencapai 5, hentikan loop
            if images_captured_count >= 5:
                logger.info(f"Captured {images_captured_count} threat images. Stopping detection.")
                break
            
            # Simpan laporan jika ancaman terdeteksi
            if images_captured:
                logger.info("Threat detected. Saving report...")
                create_report(owner_id, images_captured, label="Knife Detected")
            
            # Tampilkan frame
            cv2.imshow('Knife Detection', frame)
            
            # Keluar jika menekan 'q'
            if cv2.waitKey(1) & 0xFF == ord('q'):
                logger.info("User requested to quit detection.")
                break
                
    except Exception as e:
        logger.error(f"Error during detection: {str(e)}")
        
    finally:
        cap.release()
        cv2.destroyAllWindows()

if __name__ == "__main__":
    YOLO_PATH = "app/models/yolov8n.pt"
    FAST_RCNN_PATH = "app/models/knife_detector.h5"
    OWNER_ID = "a5f286c5-6b98-493d-94c9-f08a594bac2e"

    CCTV_IP = os.getenv("CCTV_IP")
    if not CCTV_IP:
        logger.error("CCTV IP is not set in the environment file.")
        exit(1)

    real_time_detection(YOLO_PATH, FAST_RCNN_PATH, OWNER_ID, CCTV_IP)

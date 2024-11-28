import cv2
import numpy as np
import tensorflow as tf
from ultralytics import YOLO
from dotenv import load_dotenv
import os
from supabase import create_client, Client
from datetime import datetime
import uuid
import io

load_dotenv()

SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")
CCTV_IP = os.getenv("CCTV_IP")

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

is_detection_active = True

def save_detection_images(owner_id, image, label=""):
    try:
        timestamp = datetime.now().strftime("%Y%m%d%H%M%S%f")
        unique_id = str(uuid.uuid4())
        filename = f"{owner_id}_{label}_{timestamp}_{unique_id}.jpg"
        _, buffer = cv2.imencode('.jpg', image)
        file_bytes = io.BytesIO(buffer)
        supabase.storage.from_("foto-maling").upload(filename, file_bytes.getvalue())
        public_url = supabase.storage.from_("foto-maling").get_public_url(filename)
        return public_url
    except Exception:
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
    for result in yolo_results:
        boxes = result.boxes
        for box in boxes:
            x1, y1, x2, y2 = box.xyxy[0]
            conf = box.conf[0]
            if conf > 0.8:
                cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 255, 0), 2)
                label = f"Conf: {conf:.2f}"
                cv2.putText(frame, label, (int(x1), int(y1) - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (0, 255, 0), 2)
                cropped_image = frame[int(y1):int(y2), int(x1):int(x2)]
                image_url = save_detection_images(owner_id, cropped_image, label="YOLO")
                if image_url:
                    images_captured.append(image_url)
    knife_prob = float(fast_rcnn_pred)
    label = f"Knife Probability: {knife_prob:.2f}"
    cv2.putText(frame, label, (10, 30), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
    if knife_prob > 0.7:
        cv2.putText(frame, "WARNING: Knife Detected!", (10, 60), cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)
        image_url = save_detection_images(owner_id, frame, label="Knife")
        if image_url:
            images_captured.append(image_url)
    return frame, images_captured

def real_time_detection(yolo_path, fast_rcnn_path, owner_id, camera_source):
    global is_detection_active
    yolo_model, fast_rcnn_model = load_models(yolo_path, fast_rcnn_path)
    cap = cv2.VideoCapture(camera_source)
    if not cap.isOpened():
        return
    cap.set(cv2.CAP_PROP_FRAME_WIDTH, 1280)
    cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 720)
    images_captured_count = 0
    try:
        while is_detection_active:
            ret, frame = cap.read()
            if not ret:
                break
            yolo_results, fast_rcnn_pred = process_frame(
                frame,
                yolo_model,
                fast_rcnn_model
            )
            frame, images_captured = draw_detections(
                frame,
                yolo_results,
                fast_rcnn_pred,
                owner_id
            )
            images_captured_count += len(images_captured)
            if images_captured_count >= 5:
                break
            cv2.imshow('Knife Detection', frame)
            if cv2.waitKey(1) & 0xFF == ord('q'):
                break
    except Exception:
        pass
    finally:
        cap.release()
        cv2.destroyAllWindows()
        is_detection_active = False

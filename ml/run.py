import cv2
import numpy as np
import os
import time
from datetime import datetime
from ultralytics import YOLO

CAMERA_URL = 'http://10.44.10.100:8080/video'
MODEL_PATH = 'model/best.onnx'
EVIDENCE_DIR = 'evidence'
CONFIDENCE_THRESHOLD = 0.5
SAVE_INTERVAL = 5  # detik

os.makedirs(EVIDENCE_DIR, exist_ok=True)

def detect_objects_from_ipcam():
    yolo_model = YOLO(MODEL_PATH)
    video_capture = cv2.VideoCapture(CAMERA_URL)
    last_save_time = time.time()

    while True:
        ret, frame = video_capture.read()
        if not ret:
            break

        results = yolo_model(frame)
        detected = False

        for result in results:
            classes = result.names
            cls = result.boxes.cls
            conf = result.boxes.conf
            detections = result.boxes.xyxy

            for pos, detection in enumerate(detections):
                if conf[pos] >= CONFIDENCE_THRESHOLD:
                    detected = True
                    xmin, ymin, xmax, ymax = detection
                    label = f"{classes[int(cls[pos])]} {conf[pos]:.2f}"
                    color = (0, int(cls[pos]), 255)
                    # --- DRAW BOX ---
                    cv2.rectangle(frame, (int(xmin), int(ymin)), (int(xmax), int(ymax)), color, 2)
                    
                    # --- DRAW LABEL WITH BACKGROUND ---
                    (text_width, text_height), baseline = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.7, 2)
                    # Draw background rectangle for label
                    cv2.rectangle(frame, 
                        (int(xmin), int(ymin) - text_height - 10), 
                        (int(xmin) + text_width, int(ymin)), 
                        color, 
                        thickness=cv2.FILLED
                    )
                    # Draw text above the bounding box
                    cv2.putText(frame, label, (int(xmin), int(ymin) - 5), 
                        cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2, cv2.LINE_AA)

        # Save evidence per interval
        current_time = time.time()
        if detected and (current_time - last_save_time) >= SAVE_INTERVAL:
            filename = datetime.now().strftime("%Y%m%d_%H%M%S") + ".jpg"
            save_path = os.path.join(EVIDENCE_DIR, filename)
            cv2.imwrite(save_path, frame)
            last_save_time = current_time
            print(f"[INFO] Evidence saved: {save_path}")

        # OPTIONAL: tampilkan frame deteksi secara real-time
        # cv2.imshow("Detection", frame)
        # if cv2.waitKey(1) & 0xFF == ord('q'):
        #     break

    video_capture.release()
    # cv2.destroyAllWindows()

# Jalankan deteksi
detect_objects_from_ipcam()

import os
import cv2
from datetime import datetime

def save_detection_images(owner_id, image, label=""):

    folder_path = f"detected_images/{owner_id}"
    os.makedirs(folder_path, exist_ok=True)

    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    filename = f"{label}_{timestamp}.jpg"
    filepath = os.path.join(folder_path, filename)

    cv2.imwrite(filepath, image)
    return filepath

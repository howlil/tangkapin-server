import cv2
import numpy as np
import os
import time
import uuid
import threading
import requests
from queue import Queue
from datetime import datetime
from io import BytesIO
from ultralytics import YOLO
from dotenv import load_dotenv

load_dotenv()

# API Configuration
API_ENDPOINT = os.getenv('API_ENDPOINT', 'http://localhost:3000/api/v1/detection')

# Detection Configuration
CONFIDENCE_THRESHOLD = float(os.getenv('CONFIDENCE_THRESHOLD', '0.7'))
WEAPON_CLASSES = ['pistol', 'knife']
MODEL_PATH = os.getenv('MODEL_PATH', 'models/weapon_detection.pt')

# Evidence Configuration
EVIDENCE_DIR = os.getenv('EVIDENCE_DIR', 'evidence')

# IP Camera Configuration
CAMERA_URLS = os.getenv('CAMERA_URLS', 'http://192.168.1.100:8080/video').split(',')
CAMERA_RETRY_INTERVAL = int(os.getenv('CAMERA_RETRY_INTERVAL', '5'))  # seconds
CAMERA_LOCATIONS = {}

# Parse camera locations from environment
camera_locations_env = os.getenv('CAMERA_LOCATIONS', '')
if camera_locations_env:
    for location_pair in camera_locations_env.split(','):
        parts = location_pair.split(':')
        if len(parts) == 2:
            CAMERA_LOCATIONS[parts[0].strip()] = parts[1].strip()

# Set up logging
from logger import detection_logger as logger

# Create evidence directory
os.makedirs(EVIDENCE_DIR, exist_ok=True)

# Global flag for detection status
is_detection_active = True

# Create queues for image processing
image_save_queue = Queue()
image_url_queue = Queue()

def save_detection_images_worker():
    """Worker thread function to save images asynchronously"""
    while is_detection_active or not image_save_queue.empty():
        try:
            if not image_save_queue.empty():
                camera_ip, image, label, timestamp_str = image_save_queue.get()
                
                unique_id = str(uuid.uuid4())
                filename = f"{label}_{unique_id}.jpg"
                
                # Create directory structure
                camera_dir = camera_ip.replace(":", "_").replace("/", "_").replace(".", "_")
                local_dir = os.path.join(EVIDENCE_DIR, camera_dir, timestamp_str)
                os.makedirs(local_dir, exist_ok=True)
                
                # Save image locally
                local_path = os.path.join(local_dir, filename)
                cv2.imwrite(local_path, image)
                logger.info(f"Image saved locally: {local_path}")
                
                # Get camera location if available
                location = CAMERA_LOCATIONS.get(camera_ip, "Unknown")
                
                # Add to URL queue for API reporting
                evidence_data = {
                    'filepath': os.path.abspath(local_path),
                    'camera_ip': camera_ip,
                    'label': label,
                    'confidence': CONFIDENCE_THRESHOLD,
                    'timestamp': timestamp_str,
                    'location': location
                }
                
                image_url_queue.put(evidence_data)
                logger.info(f"Evidence data queued for API reporting")
            else:
                # Sleep to prevent CPU spinning
                time.sleep(0.1)
        except Exception as e:
            logger.error(f"Error in image save worker: {e}")
        finally:
            if not image_save_queue.empty():
                image_save_queue.task_done()

def save_detection_images(camera_ip, image, label=""):
    """Add an image to the save queue and return immediately"""
    timestamp_str = datetime.now().strftime("%Y%m%d_%H%M%S")
    image_save_queue.put((camera_ip, image.copy(), label, timestamp_str))
    return "pending_upload"  # Return placeholder

def report_to_api_worker():
    """Worker thread function to report detections to API"""
    while is_detection_active or not image_url_queue.empty():
        try:
            if not image_url_queue.empty():
                evidence_data = image_url_queue.get()
                
                # Read the image for API submission
                with open(evidence_data['filepath'], 'rb') as img_file:
                    files = {'image': (os.path.basename(evidence_data['filepath']), img_file, 'image/jpeg')}
                    
                    # Prepare data for API
                    data = {
                        'camera_ip': evidence_data['camera_ip'],
                        'weapon_type': evidence_data['label'],
                        'confidence': str(evidence_data['confidence']),
                        'timestamp': evidence_data['timestamp'],
                        'location': evidence_data['location']
                    }
                    
                    # Send to API
                    try:
                        response = requests.post(API_ENDPOINT, files=files, data=data)
                        if response.status_code == 200 or response.status_code == 201:
                            logger.info(f"Successfully reported to API: {response.status_code}")
                        else:
                            logger.error(f"API error: {response.status_code} - {response.text}")
                    except Exception as e:
                        logger.error(f"Failed to report to API: {e}")
            else:
                # Sleep to prevent CPU spinning
                time.sleep(0.1)
        except Exception as e:
            logger.error(f"Error in API reporting worker: {e}")
        finally:
            if not image_url_queue.empty():
                image_url_queue.task_done()

def load_model(model_path):
    try:
        # Load YOLO model
        model = YOLO(model_path, task='detect')
        logger.info(f"Model loaded successfully from {model_path}")
        return model
    except Exception as e:
        logger.error(f"Error loading model: {e}")
        raise

def process_frame(frame, model):
    try:
        # Resize frame to speed up processing - 50% reduction
        frame_height, frame_width = frame.shape[:2]
        resize_factor = 0.5
        small_frame = cv2.resize(frame, (int(frame_width * resize_factor), int(frame_height * resize_factor)))
        
        # First-pass detection on smaller frame
        results = model(small_frame, conf=0.5)
        
        # If anything detected in small frame, verify on full frame
        if results and len(results[0].boxes) > 0:
            # Process the full frame for better accuracy
            results = model(frame, conf=0.35)
            return results[0] if results else None
        return None
    except Exception as e:
        logger.error(f"Error processing frame: {e}")
        return None

def draw_detections(frame, results, camera_ip):
    detections_found = False
    
    if results and hasattr(results, 'boxes'):
        for box in results.boxes:
            conf = float(box.conf)
            class_id = int(box.cls)
            class_name = results.names[class_id]
            
            # Skip if not a weapon class
            if class_name.lower() not in [c.lower() for c in WEAPON_CLASSES]:
                continue
                
            # Validate detection
            if conf >= CONFIDENCE_THRESHOLD:
                x1, y1, x2, y2 = map(int, box.xyxy[0])
                detection_width = x2 - x1
                detection_height = y2 - y1
                
                # Simplified validation - skip if detection is too small
                if detection_width > 20 and detection_height > 20:
                    # Draw on frame
                    color = (0, 0, 255)  # Red for weapons
                    cv2.rectangle(frame, (x1, y1), (x2, y2), color, 2)
                    label = f"{class_name}: {conf:.2f}"
                    cv2.putText(frame, label, (x1, y1 - 10), 
                              cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)
                    
                    # Add to queue for saving
                    save_detection_images(camera_ip, frame, label=class_name.lower())
                    detections_found = True
                    logger.info(f"Weapon detected: {class_name}, confidence: {conf:.2f}")

    return frame, detections_found

def monitor_camera(camera_url, model):
    """Monitor a single camera for weapon detection"""
    global is_detection_active
    
    logger.info(f"Starting detection on camera: {camera_url}")
    location = CAMERA_LOCATIONS.get(camera_url, "Unknown")
    logger.info(f"Camera location: {location}")
    
    # Connection retry loop
    while is_detection_active:
        try:
            # Open video capture
            cap = cv2.VideoCapture(camera_url)
            
            if not cap.isOpened():
                logger.error(f"Unable to open video source: {camera_url}")
                time.sleep(CAMERA_RETRY_INTERVAL)
                continue
            
            # Set lower resolution and frame rate
            cap.set(cv2.CAP_PROP_FRAME_WIDTH, 640)
            cap.set(cv2.CAP_PROP_FRAME_HEIGHT, 480)
            cap.set(cv2.CAP_PROP_FPS, 15)  # Reduced to 15 FPS
            
            frame_counter = 0
            last_motion_frame = None
            
            # Process frames
            while is_detection_active:
                ret, frame = cap.read()
                if not ret:
                    logger.error(f"Failed to read frame from camera: {camera_url}")
                    break

                # Frame skipping - only process every 4th frame
                frame_counter += 1
                if frame_counter % 4 != 0:
                    continue
                
                # Simple motion detection
                gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)
                gray_frame = cv2.GaussianBlur(gray_frame, (21, 21), 0)
                
                if last_motion_frame is not None:
                    frame_delta = cv2.absdiff(last_motion_frame, gray_frame)
                    thresh = cv2.threshold(frame_delta, 25, 255, cv2.THRESH_BINARY)[1]
                    motion_detected = np.sum(thresh) > 5000  # Higher threshold for motion
                    
                    # Skip processing if no motion detected
                    if not motion_detected:
                        last_motion_frame = gray_frame
                        continue
                
                last_motion_frame = gray_frame

                # Process the frame
                results = process_frame(frame, model)
                if results is not None:
                    # Detect and draw results
                    frame, detections_found = draw_detections(frame, results, camera_url)
                
                # Optional: press 'q' to quit
                if cv2.waitKey(1) & 0xFF == ord('q'):
                    logger.info(f"Detection stopped manually for camera: {camera_url}")
                    break

            # Release resources
            cap.release()
            logger.info(f"Connection lost to camera: {camera_url}, will retry in {CAMERA_RETRY_INTERVAL} seconds")
            time.sleep(CAMERA_RETRY_INTERVAL)
            
        except Exception as e:
            logger.error(f"Error monitoring camera {camera_url}: {e}")
            time.sleep(CAMERA_RETRY_INTERVAL)

def main():
    global is_detection_active
    is_detection_active = True
    
    try:
        # Check if any cameras are configured
        if not CAMERA_URLS or not any(url.strip() for url in CAMERA_URLS):
            logger.error("No cameras configured. Please set CAMERA_URLS in your .env file")
            return
            
        # Load model
        model = load_model(MODEL_PATH)
        
        # Start worker threads
        save_thread = threading.Thread(target=save_detection_images_worker)
        save_thread.daemon = True
        save_thread.start()
        logger.info("Image saving worker started")
        
        api_thread = threading.Thread(target=report_to_api_worker)
        api_thread.daemon = True
        api_thread.start()
        logger.info("API reporting worker started")
        
        # Start a thread for each camera
        camera_threads = []
        active_cameras = 0
        
        for camera_url in CAMERA_URLS:
            camera_url = camera_url.strip()
            if camera_url:
                camera_thread = threading.Thread(target=monitor_camera, args=(camera_url, model))
                camera_thread.daemon = True
                camera_thread.start()
                camera_threads.append(camera_thread)
                active_cameras += 1
        
        logger.info(f"Started monitoring {active_cameras} cameras")
        
        # Wait for all camera threads to complete
        for thread in camera_threads:
            thread.join()
            
    except KeyboardInterrupt:
        logger.info("Detection system stopping due to keyboard interrupt")
    except Exception as e:
        logger.error(f"Error in main detection loop: {e}")
    finally:
        # Clean shutdown
        is_detection_active = False
        logger.info("Waiting for worker threads to complete...")
        
        # Wait for queues to empty
        if not image_save_queue.empty():
            logger.info(f"Waiting for {image_save_queue.qsize()} images to be saved...")
            image_save_queue.join()
        
        if not image_url_queue.empty():
            logger.info(f"Waiting for {image_url_queue.qsize()} API reports to complete...")
            image_url_queue.join()
            
        logger.info("Weapon detection system stopped")
        cv2.destroyAllWindows()

if __name__ == "__main__":
    main()
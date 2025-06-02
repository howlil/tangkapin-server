# import cv2
# import os
# import time
# from datetime import datetime
# from ultralytics import YOLO

# CAMERA_URL = 'http://192.168.0.16:8080/video'  # ganti sesuai URL IP Cam hp kamu
# MODEL_PATH = 'model/normal/best.pt'  # Model YOLOv8 custom (.pt)
# EVIDENCE_DIR = 'evidence'
# CONFIDENCE_THRESHOLD = 0.78   # Lebih tinggi, lebih akurat
# SKIP_FRAME = 3               # Proses tiap 3 frame, bisa 2/3 sesuai kecepatan hardware
# INFER_SIZE = (640, 360)      # Ukuran resize frame sebelum deteksi

# os.makedirs(EVIDENCE_DIR, exist_ok=True)

# def detect_objects_from_ipcam():
#     yolo_model = YOLO(MODEL_PATH)
#     video_capture = cv2.VideoCapture(CAMERA_URL)
#     last_save_time = time.time()
#     frame_count = 0
#     SAVE_INTERVAL = 5  

#     print("[INFO] Mulai deteksi dari IP Cam...")
#     start_time = time.time()
#     processed_frames = 0

#     while True:
#         ret, frame = video_capture.read()
#         if not ret:
#             print("[ERROR] Stream selesai / tidak terbaca.")
#             break

#         frame_count += 1
#         if frame_count % SKIP_FRAME != 0:
#             continue  # Skip frame, untuk menurunkan latency

#         # Resize frame sebelum inferensi, untuk percepat proses
#         small_frame = cv2.resize(frame, INFER_SIZE)

#         # Proses deteksi (YOLOv8 native)
#         results = yolo_model(small_frame, verbose=False)
#         detected = False
#         detected_objs = []

#         for result in results:
#             classes = result.names
#             cls = result.boxes.cls
#             conf = result.boxes.conf
#             detections = result.boxes.xyxy

#             for pos, detection in enumerate(detections):
#                 if conf[pos] >= CONFIDENCE_THRESHOLD:
#                     detected = True
#                     xmin, ymin, xmax, ymax = detection
#                     # Skalakan box ke ukuran asli
#                     scale_x = frame.shape[1] / INFER_SIZE[0]
#                     scale_y = frame.shape[0] / INFER_SIZE[1]
#                     xmin = int(xmin * scale_x)
#                     ymin = int(ymin * scale_y)
#                     xmax = int(xmax * scale_x)
#                     ymax = int(ymax * scale_y)

#                     label = f"{classes[int(cls[pos])]} {conf[pos]:.2f}"
#                     color = (0, 0, 255) if classes[int(cls[pos])].lower() in ['gun', 'knife'] else (0, 255, 0)

#                     # Draw bounding box dan label
#                     cv2.rectangle(frame, (xmin, ymin), (xmax, ymax), color, 2)
#                     (text_width, text_height), baseline = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.7, 2)
#                     cv2.rectangle(frame, 
#                         (xmin, ymin - text_height - 10), 
#                         (xmin + text_width, ymin), 
#                         color, thickness=cv2.FILLED)
#                     cv2.putText(frame, label, (xmin, ymin - 5), 
#                         cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2, cv2.LINE_AA)

#                     # LOG: tampilkan di console
#                     detected_objs.append({
#                         "class": classes[int(cls[pos])],
#                         "confidence": float(conf[pos]),
#                         "box": [xmin, ymin, xmax, ymax]
#                     })

#         processed_frames += 1
#         # LOG: Tampilkan proses deteksi per frame
#         print(f"[FRAME {frame_count}] Detected: {detected} | Objects: {detected_objs if detected else 'None'}")

#         # Simpan bukti jika ada deteksi, interval per 5 detik
#         current_time = time.time()
#         if detected and (current_time - last_save_time) >= SAVE_INTERVAL:
#             filename = datetime.now().strftime("%Y%m%d_%H%M%S") + ".jpg"
#             save_path = os.path.join(EVIDENCE_DIR, filename)
#             cv2.imwrite(save_path, frame)
#             last_save_time = current_time
#             print(f"[INFO] Evidence saved: {save_path}")

#         # (Optional) Tampilkan real-time
#         cv2.imshow("Weapon Detection", frame)
#         if cv2.waitKey(1) & 0xFF == ord('q'):
#             break

#         # (Optional) Tampilkan FPS setiap 30 processed frames
#         if processed_frames % 30 == 0:
#             elapsed = time.time() - start_time
#             fps = processed_frames / elapsed if elapsed > 0 else 0
#             print(f"[INFO] FPS: {fps:.2f}")

#     video_capture.release()
#     cv2.destroyAllWindows()
#     print("[INFO] Deteksi selesai.")

# # --- Jalankan Deteksi ---
# if __name__ == "__main__":
#     detect_objects_from_ipcam()
import cv2
import os
import time
from datetime import datetime
from ultralytics import YOLO
from supabase import create_client, Client
import requests

# === SETUP ENV / KONFIGURASI ===
CAMERA_URL = 'http://192.168.0.16:8080/video'            # Ganti dengan alamat IP webcam HP kamu
MODEL_PATH = 'model/normal/best.pt'                      # Path model YOLOv8
EVIDENCE_DIR = 'evidence'
CONFIDENCE_THRESHOLD = 0.78
SKIP_FRAME = 3
INFER_SIZE = (640, 360)

SUPABASE_URL = "https://ukpkzuchqvxktksuvrqk.supabase.co"
SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrcGt6dWNocXZ4a3Rrc3V2cnFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODk5MTUsImV4cCI6MjA2MjE2NTkxNX0.xKcGPOrno_Yig6pqCUdpbxtfiLWBZC0SAAQEQDksLhQ"
SUPABASE_BUCKET = "foto-maling"

API_ENDPOINT = "http://localhost:8080/api/v1/deteksi"    # Endpoint backend kamu

# === SETUP KONEKSI SUPABASE ===
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)
os.makedirs(EVIDENCE_DIR, exist_ok=True)

def upload_to_supabase(local_file_path, bucket_name=SUPABASE_BUCKET):
    file_name = os.path.basename(local_file_path)
    # Ensure the path is always 'filename' only, no leading slash
    storage = supabase.storage
    # Optional: remove if exists
    try:
        storage.from_(bucket_name).remove([file_name])
    except Exception:
        pass
    with open(local_file_path, "rb") as f:
        data = f.read()
    result = storage.from_(bucket_name).upload(file_name, data, {"content-type": "image/jpeg"})
    # GET PUBLIC URL - Make sure path does not start with /
    public_url = storage.from_(bucket_name).get_public_url(file_name)
    # Handle dictionary if returned as {"publicUrl": ...}
    if isinstance(public_url, dict) and 'publicUrl' in public_url:
        public_url = public_url['publicUrl']
    # Remove accidental double slash (prevent any bug)
    public_url = public_url.replace('//'+file_name, '/'+file_name)
    print(f"[SUPABASE] Uploaded: {file_name} | Public URL: {public_url}")
    return public_url

def send_detection_to_api(cctv_ip, evidence_image_url, weapon_type, api_url=API_ENDPOINT):
    payload = {
        "cctv_ip": cctv_ip,
        "evidence_image": evidence_image_url,  # Berisi URL PUBLIC dari Supabase!
        "weapon_type": weapon_type
    }
    try:
        r = requests.post(api_url, json=payload)
        print(f"[API] Status: {r.status_code}, Response: {r.text}")
    except Exception as e:
        print(f"[API] Gagal mengirim ke endpoint: {e}")

def detect_objects_from_ipcam():
    yolo_model = YOLO(MODEL_PATH)
    video_capture = cv2.VideoCapture(CAMERA_URL)
    last_save_time = time.time()
    frame_count = 0
    SAVE_INTERVAL = 5

    print("[INFO] Mulai deteksi dari IP Cam...")
    start_time = time.time()
    processed_frames = 0

    while True:
        ret, frame = video_capture.read()
        if not ret:
            print("[ERROR] Stream selesai / tidak terbaca.")
            break

        frame_count += 1
        if frame_count % SKIP_FRAME != 0:
            continue

        small_frame = cv2.resize(frame, INFER_SIZE)
        results = yolo_model(small_frame, verbose=False)
        detected = False
        detected_objs = []

        for result in results:
            classes = result.names
            cls = result.boxes.cls
            conf = result.boxes.conf
            detections = result.boxes.xyxy

            for pos, detection in enumerate(detections):
                if conf[pos] >= CONFIDENCE_THRESHOLD:
                    detected = True
                    xmin, ymin, xmax, ymax = detection
                    scale_x = frame.shape[1] / INFER_SIZE[0]
                    scale_y = frame.shape[0] / INFER_SIZE[1]
                    xmin = int(xmin * scale_x)
                    ymin = int(ymin * scale_y)
                    xmax = int(xmax * scale_x)
                    ymax = int(ymax * scale_y)
                    label = f"{classes[int(cls[pos])]} {conf[pos]:.2f}"
                    color = (0, 0, 255) if classes[int(cls[pos])].lower() in ['gun', 'guns','knife'] else (0, 255, 0)
                    cv2.rectangle(frame, (xmin, ymin), (xmax, ymax), color, 2)
                    (text_width, text_height), baseline = cv2.getTextSize(label, cv2.FONT_HERSHEY_SIMPLEX, 0.7, 2)
                    cv2.rectangle(frame, (xmin, ymin - text_height - 10), (xmin + text_width, ymin), color, thickness=cv2.FILLED)
                    cv2.putText(frame, label, (xmin, ymin - 5), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2, cv2.LINE_AA)
                    detected_objs.append({
                        "class": classes[int(cls[pos])],
                        "confidence": float(conf[pos]),
                        "box": [xmin, ymin, xmax, ymax]
                    })

        processed_frames += 1
        print(f"[FRAME {frame_count}] Detected: {detected} | Objects: {detected_objs if detected else 'None'}")

        current_time = time.time()
        if detected and (current_time - last_save_time) >= SAVE_INTERVAL:
            filename = datetime.now().strftime("%Y%m%d_%H%M%S") + ".jpg"
            save_path = os.path.join(EVIDENCE_DIR, filename)
            cv2.imwrite(save_path, frame)
            last_save_time = current_time
            print(f"[INFO] Evidence saved: {save_path}")

            # === UPLOAD KE SUPABASE ===
            public_url = upload_to_supabase(save_path)
            print(f"[INFO] Evidence PUBLIC URL (Supabase): {public_url}")

            # --- Ambil type weapon dari deteksi
            weapon_type = None
            for obj in detected_objs:
                if obj['class'].lower() in ["knife","guns", "gun"]:
                    weapon_type = obj['class'].lower()
                    break

            if weapon_type:
                # Kirim ke endpoint backend (pakai public_url)
                send_detection_to_api(
                    cctv_ip=CAMERA_URL.replace("http://", "").split(":")[0],  # ambil IP doang
                    evidence_image_url=public_url,
                    weapon_type=weapon_type
                )
            else:
                print("[INFO] Tidak ditemukan tipe weapon yang valid untuk dikirim.")

     
        if processed_frames % 30 == 0:
            elapsed = time.time() - start_time
            fps = processed_frames / elapsed if elapsed > 0 else 0
            print(f"[INFO] FPS: {fps:.2f}")

    video_capture.release()
    cv2.destroyAllWindows()
    print("[INFO] Deteksi selesai.")

if __name__ == "__main__":
    detect_objects_from_ipcam()

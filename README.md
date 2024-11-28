
# Tangkapin-Server

Tangkapin-Server adalah backend aplikasi untuk sistem deteksi kejahatan menggunakan kamera CCTV. Sistem ini memanfaatkan teknologi Computer Vision dengan model YOLO dan TensorFlow untuk mendeteksi senjata tajam (seperti pisau) secara real-time dan mengirimkan laporan ke pengguna dan polisi terdekat.

---

## 🛠️ Fitur Utama

- **Real-time Detection**: Deteksi objek (misalnya, pisau) secara real-time dari CCTV yang terhubung.
- **Supabase Integration**: Menyimpan gambar hasil deteksi di Supabase Storage dengan URL publik.
- **Report Creation**: Mengirimkan laporan otomatis ke pengguna (OWNER) dan polisi (POLICE) terdekat.
- **Radius Search**: Menggunakan algoritma Haversine untuk mencari polisi dalam radius 20 km dari lokasi kejadian.
- **Database Integration**: Mengelola data pengguna, CCTV, prediksi, dan laporan menggunakan PostgreSQL.

---

## 🔧 Teknologi yang Digunakan

- **Backend Framework**: Flask
- **Computer Vision**: YOLO (ultralytics), TensorFlow
- **Database**: PostgreSQL (via SQLAlchemy ORM)
- **Storage**: Supabase
- **Dependency Management**: `pip` / `requirements.txt`
- **Environment Variables**: `dotenv`

---

## ⚙️ Instalasi

### 1. Clone Repository
```bash
git clone https://github.com/howlil/tangkapin-server.git
cd tangkapin-server
```

### 2. Buat Virtual Environment
```bash
python -m venv venv
source venv/bin/activate  # Untuk Linux/Mac
venv\Scripts\activate     # Untuk Windows
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Setup Database
- Pastikan PostgreSQL telah diinstal dan berjalan.
- Buat database untuk aplikasi ini.
- Jalankan migrasi untuk membuat tabel:
  ```bash
  flask db upgrade
  ```

### 5. Konfigurasi `.env`
Buat file `.env` di root proyek Anda dengan isi sebagai berikut:

```env
SUPABASE_URL=<your_supabase_url>
SUPABASE_KEY=<your_supabase_key>
CCTV_IP=<your_cctv_ip>
DATABASE_URL=<your_postgresql_connection_url>
FLASK_ENV=development
```

> **Keterangan**:
> - **SUPABASE_URL**: URL dari Supabase proyek Anda.
> - **SUPABASE_KEY**: Kunci API untuk Supabase.
> - **CCTV_IP**: IP dari CCTV yang terhubung.
> - **DATABASE_URL**: URL koneksi PostgreSQL Anda.

---

## 🚀 Menjalankan Proyek

### Jalankan Server
```bash
flask run
```

Server akan berjalan di `http://127.0.0.1:5000`.

---

## 🏗️ Arsitektur

### Struktur Direktori
```
tangkapin-server/
├── app/
│   ├── controllers/          # Logic utama untuk deteksi dan laporan
│   ├── models/               # Definisi model database (SQLAlchemy)
│   ├── utils/                # Logger dan fungsi utilitas lainnya
│   ├── __init__.py           # Inisialisasi Flask app
│   └── ...
├── migrations/               # File migrasi database
├── requirements.txt          # Dependensi Python
├── .env                      # Variabel lingkungan (tidak di-commit)
├── README.md                 # Dokumentasi proyek
└── ...
```

### Workflow Sistem

1. **Real-Time Detection**:
   - Aplikasi membaca stream video dari IP CCTV.
   - Menggunakan YOLO untuk deteksi objek (senjata tajam).
   - Jika senjata terdeteksi, gambar disimpan di Supabase, dan laporan dibuat.

2. **Report Creation**:
   - Setelah 5 gambar berhasil dikumpulkan:
     - Sistem mencari polisi dalam radius 20 km dari lokasi CCTV.
     - Laporan disimpan ke database dan dikirimkan ke pihak terkait.

3. **Haversine Algorithm**:
   - Digunakan untuk menghitung jarak antara koordinat GPS pengguna (OWNER) dan polisi (POLICE).

---

## 📡 Endpoints API

### 1. Real-Time Detection
**Endpoint**: Tidak langsung diakses melalui HTTP, dijalankan oleh server.

---

### 2. Buat Laporan
**Endpoint**: `/api/reports`

**Method**: `POST`

**Body**:
```json
{
  "owner_id": "<UUID>",
  "array_image": ["<image_url_1>", "<image_url_2>", "..."],
  "description": "Telah terjadi kejadian..."
}
```

**Response**:
- **Success (201)**:
  ```json
  {
    "success": true,
    "report": {
      "report_id": "<UUID>",
      "owner_id": "<UUID>",
      "description": "Telah terjadi kejadian...",
      "images": ["<image_url_1>", "<image_url_2>", "..."],
      "police_in_radius": [
        {"id": "<UUID>", "name": "Nama Polisi", "distance_km": 2.5}
      ]
    }
  }
  ```
- **Error (400/500)**:
  ```json
  {
    "error": "Deskripsi kesalahan"
  }
  ```

---

## 📝 Log Proyek

Logger digunakan untuk melacak semua proses, seperti:
- Inisialisasi server
- Pemrosesan frame CCTV
- Proses penyimpanan gambar ke Supabase
- Pembuatan laporan

Log file dapat ditemukan di direktori `logs/`.

---

## 🛠️ Pengembangan dan Debugging

- **Mode Pengembangan**: Jalankan dengan Flask di mode `development`:
  ```bash
  flask run --debug
  ```

- **Tes Koneksi Database**:
  Pastikan database dapat diakses dengan:
  ```bash
  flask shell
  >>> from app import db
  >>> db.session.execute("SELECT 1")
  ```

- **Logs Debug**:
  Periksa log di terminal atau file `logs/debug.log`.

---

## 🛣️ Roadmap

- **Integrasi Notifikasi**:
  Menambahkan notifikasi real-time ke aplikasi klien (OWNER dan POLICE).
- **Implementasi AI Tambahan**:
  Deteksi jenis senjata lainnya (seperti pistol)


---

## 📜 Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

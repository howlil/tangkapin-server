def create_report_and_notify(owner_id, images_captured, description="Terjadi kemalingan dengan sajam"):
    """
    Membuat laporan ke database dan mengirimkan notifikasi ke user dan polisi terdekat.
    """
    try:
        # Dapatkan data owner dari database
        owner = supabase.table("users").select("*").eq("id", owner_id).single().execute()
        if not owner.data:
            logger.error(f"Owner with ID {owner_id} not found.")
            return
        
        # Cari polisi terdekat berdasarkan koordinat owner
        owner_coords = (float(owner.data["lang"]), float(owner.data["lat"]))
        police_data = supabase.rpc("find_nearest_police", {"latitude": owner_coords[0], "longitude": owner_coords[1]}).execute()

        if not police_data.data:
            logger.error("No nearby police found.")
            return

        police_id = police_data.data["id"]

        # Buat laporan di tabel laporan
        report_id = str(uuid.uuid4())
        report_data = {
            "id": report_id,
            "owner_id": owner_id,
            "images": [{"id": str(uuid.uuid4()), "img_url": url} for url in images_captured],
            "description": description,
            "created_at": datetime.now().isoformat(),
        }
        supabase.table("reports").insert(report_data).execute()

        # Tambahkan data hasil laporan di tabel `report_results`
        result_id = str(uuid.uuid4())
        result_data = {
            "id": result_id,
            "owner_id": owner_id,
            "report_id": report_id,
            "status": "PENDING",
            "created_at": datetime.now().isoformat(),
        }
        supabase.table("report_results").insert(result_data).execute()

        # Kirim notifikasi ke owner dan polisi
        notif_data = {
            "message": description,
            "images": images_captured,
            "location": owner.data["address"],
            "time": datetime.now().strftime("%H:%M:%S"),
        }

        notify_alert(owner_id, notif_data, target="owner")
        notify_alert(police_id, notif_data, target="police")

        logger.info(f"Report created and notifications sent: {report_id}")

    except Exception as e:
        logger.error(f"Failed to create report or send notification: {e}")

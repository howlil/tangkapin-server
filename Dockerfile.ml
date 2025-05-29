FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && rm -rf /var/lib/apt/lists/*

COPY ml/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

RUN mkdir -p /app/ml/evidence /app/ml/logs /app/ml/model

COPY ml /app/ml

WORKDIR /app/ml

CMD ["python", "run.py"]
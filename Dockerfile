# Use the official Python image with slim variant
FROM python:3.11-slim

# Set the working directory
WORKDIR /app

# Install system dependencies for building Python packages and image processing
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    libgl1-mesa-glx \
    libglib2.0-0 \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Copy the requirements file to the working directory
COPY requirements.txt .

# Install Python dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the application files to the working directory
COPY . .

# Expose the application port
EXPOSE 8080

# Set environment variables for Flask
ENV FLASK_APP=run.py
ENV FLASK_ENV=production

# Use Gunicorn as the application server
CMD ["gunicorn", "--bind", "0.0.0.0:8080", "--workers=1", "run:app"]

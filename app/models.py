from . import db
from sqlalchemy.dialects.postgresql import UUID
import uuid
from datetime import datetime
from werkzeug.security import generate_password_hash
from enum import Enum  

class RoleEnum(Enum):
    OWNER = "OWNER"
    POLICE = "POLICE"

# Enum untuk Status
class StatusEnum(Enum):
    PENDING = "PENDING"
    DIPROSES = "DIPROSES"
    SELESAI = "SELESAI"

class User(db.Model):
    __tablename__ = "user"

    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    email = db.Column(db.String, unique=True, nullable=False)
    name = db.Column(db.String(100))
    password = db.Column(db.String(255), nullable=False)
    address = db.Column(db.String(255))
    lang = db.Column(db.String(50))
    lat = db.Column(db.String(50))
    role = db.Column(db.Enum(RoleEnum), nullable=False) 
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow, default=datetime.utcnow)

    # Relationships
    @staticmethod
    def hash_password(password):
        return generate_password_hash(password)

    tokens = db.relationship("Token", back_populates="user", cascade="all, delete-orphan")
    result_predicts = db.relationship("ResultPredict", back_populates="user", cascade="all, delete-orphan")
    cctvs = db.relationship("CCTV", back_populates="user", cascade="all, delete-orphan")


# Token Model
class Token(db.Model):
    __tablename__ = "tokens"
    
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    token = db.Column(db.String(255), nullable=False)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey("user.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow, default=datetime.utcnow)
    
    # Relationships
    user = db.relationship("User", back_populates="tokens")

# ResultPredict Model
class ResultPredict(db.Model):
    __tablename__ = "result_predicts"
    
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey("user.id"), nullable=False)
    predict_id = db.Column(UUID(as_uuid=True), db.ForeignKey("predicts.id"), unique=True, nullable=False)
    status = db.Column(db.Enum(StatusEnum), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow, default=datetime.utcnow)
    
    # Relationships
    user = db.relationship("User", back_populates="result_predicts")
    predict = db.relationship("Predict", back_populates="result")

# Predict Model
class Predict(db.Model):
    __tablename__ = "predicts"
    
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    deskripsi = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow, default=datetime.utcnow)
    
    # Relationships
    images = db.relationship("Images", back_populates="predict", cascade="all, delete-orphan")
    result = db.relationship("ResultPredict", back_populates="predict", uselist=False)

# CCTV Model
class CCTV(db.Model):
    __tablename__ = "cctvs"
    
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    user_id = db.Column(UUID(as_uuid=True), db.ForeignKey("user.id"), nullable=False)
    cctv_ip = db.Column(db.String, unique=True, nullable=False)
    nama_cctv = db.Column(db.String, unique=True, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow, default=datetime.utcnow)
    
    # Relationships
    user = db.relationship("User", back_populates="cctvs")


# Images Model
class Images(db.Model):
    __tablename__ = "images"
    
    id = db.Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    name_image = db.Column(db.String, nullable=False)
    predict_id = db.Column(UUID(as_uuid=True), db.ForeignKey("predicts.id"), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, onupdate=datetime.utcnow, default=datetime.utcnow)
    
    # Relationships
    predict = db.relationship("Predict", back_populates="images")

# Weapon Detection System API Specification

## System Overview

This document provides the API specification for a weapon detection system that utilizes CCTV cameras to detect weapons (knives and guns) and automatically generates reports to notify owners and nearby police stations.

### Core System Flow:
1. CCTV feed input from owner
2. Weapon detection via Flask API using PyTorch model
3. Evidence capture and storage when weapons are detected
4. Automatic report generation with detection data
5. Report and evidence posting to Express.js API
6. Real-time notifications to owner and nearest police station via Pusher
7. Report and evidence storage in database
8. Police station verification and officer assignment
9. Officer tracking and status updates via GPS

## User Roles
- **OWNER**: CCTV system owner
- **OFFICER**: Police station admin
- **POLICE**: Assigned police officer

## API Endpoints

### Authentication

#### Login
- **Endpoint**: `POST /api/login`
- **Access**: OWNER, OFFICER, POLICE
- **Request**:
  ```json
  {
    "username": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "token": "string",
      "user": {
        "id": "string",
        "name": "string",
        "role": "string"
      }
    }
  }
  ```
- **Database Model**: Uses `Owner`, `Officer`, or `Police` tables for authentication

#### Register Owner
- **Endpoint**: `POST /api/register`
- **Access**: Public
- **Request**:
  ```json
  {
    "name": "string",
    "email": "string",
    "phone": "string",
    "address": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Creates entry in `Owner` table

#### Get Current User
- **Endpoint**: `GET /api/me`
- **Access**: OWNER, OFFICER, POLICE
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "id": "string",
      "name": "string",
      "email": "string",
      "phone": "string",
      "address": "string",
      "latitude": "float",
      "longitude": "float",
      "role": "string"
    }
  }
  ```
- **Database Model**: Uses `Owner`, `Officer`, or `Police` tables based on token

### Weapon Detection

#### Detection API
- **Endpoint**: `POST /api/deteksi`
- **Access**: Flask API
- **Request**:
  ```json
  {
    "cctv_id": "string",
    "timestamp": "string", // Optional, format: YYYY-MM-DD HH:MM
    "report": {
      "title": "string",
      "description": "string",
      "location": "string",
      "incident_type": "string", // knife, gun, etc. (matches IncidentType enum)
      "report_image": "string" // base64 encoded image
    }
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Creates entries in `Report` and `Evidence` tables, links to `CCTV` and `Owner` tables

### Owner CCTV Management

#### Count CCTV and Reports
- **Endpoint**: `GET /api/count`
- **Access**: OWNER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "cctv_count": "integer",
      "report_count": "integer"
    }
  }
  ```
- **Database Model**: Count queries on `CCTV` and `Report` tables

#### CCTV Preview
- **Endpoint**: `GET /api/cctv/preview`
- **Access**: OWNER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "preview_url": "string",
      "name_cctv": "string",
      "status": "string", // Matches CCTVStatus enum
      "location": "string",
      "description": "string"
    }
  }
  ```
- **Database Model**: `CCTV` table

#### Add CCTV
- **Endpoint**: `POST /api/cctv`
- **Access**: OWNER
- **Request**:
  ```json
  {
    "name": "string",
    "location": "string",
    "description": "string",
    "IP": "string",
    "camera_type": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Creates entry in `CCTV` table, links to `Owner` table

#### List CCTVs
- **Endpoint**: `GET /api/cctv`
- **Access**: OWNER
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches CCTVStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "name": "string",
        "location": "string",
        "IP": "string",
        "stream_url": "string",
        "camera_type": "string",
        "status": "string" // Matches CCTVStatus enum
      }
    ]
  }
  ```
- **Database Model**: `CCTV` table with pagination

#### CCTV Detail
- **Endpoint**: `GET /api/cctv/:id`
- **Access**: OWNER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "id": "string",
      "name": "string",
      "location": "string",
      "IP": "string",
      "stream_url": "string",
      "camera_type": "string",
      "status": "string", // Matches CCTVStatus enum
      "description": "string",
      "Reports": [
        {
          "id": "string",
          "title": "string",
          "status": "string", // Matches ReportStatus enum
          "created_at": "string"
        }
      ]
    }
  }
  ```
- **Database Model**: `CCTV` table with related `Report` records

#### Update CCTV
- **Endpoint**: `PATCH /api/cctv/:id`
- **Access**: OWNER
- **Request**:
  ```json
  {
    "id": "string",
    "name": "string",
    "location": "string",
    "description": "string",
    "IP": "string",
    "camera_type": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Updates entry in `CCTV` table

### Owner Report Management

#### List Reports
- **Endpoint**: `GET /api/report`
- **Access**: OWNER
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches ReportStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "title": "string",
        "status": "string", // Matches ReportStatus enum
        "location": "string",
        "created_at": "string",
        "report_image": "string",
        "incident_type": "string", // Matches IncidentType enum
        "cctv_name": "string",
        "cctv_location": "string",
        "is_assigned": "boolean"
      }
    ]
  }
  ```
- **Database Model**: `Report` table with join to `CCTV` table

#### Report Detail
- **Endpoint**: `GET /api/report/:id`
- **Access**: OWNER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "id": "string",
      "title": "string",
      "description": "string",
      "status": "string", // Matches ReportStatus enum
      "location": "string",
      "report_image": "string",
      "incident_type": "string", // Matches IncidentType enum
      "created_at": "string",
      "cctv": {
        "id": "string",
        "name": "string",
        "location": "string"
      },
      "is_assigned": "boolean",
      "assigned_to": {
        "id": "string",
        "name": "string",
        "name_officer": "string",
        "tracking": [
          {
            "id": "string",
            "estimated_time": "string",
            "distance": "string"
          }
        ]
      }
    }
  }
  ```
- **Database Model**: `Report` table with joins to `CCTV`, `Assignment`, `Officer`, and `Tracking` tables

#### Report Tracking
- **Endpoint**: `GET /api/report/:id/track`
- **Access**: OWNER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "id": "string",
      "title_report": "string",
      "is_nearby": "boolean",
      "officer": {
        "id": "string",
        "name": "string",
        "phone": "string",
        "license_plate": "string",
        "vehicle_type": "string",
        "status": "string" // Matches OfficerStatus enum
      },
      "tracking": [
        {
          "id": "string",
          "latitude": "float",
          "longitude": "float",
          "timestamp": "string",
          "distance": "string",
          "estimated_time": "string",
          "status": "string", // Matches TrackingStatus enum
          "description": "string"
        }
      ]
    }
  }
  ```
- **Database Model**: `Assignment` table with joins to `Officer` and `Tracking` tables

#### Create Manual Report
- **Endpoint**: `POST /api/report`
- **Access**: OWNER
- **Request**:
  ```json
  {
    "title": "string",
    "description": "string",
    "location": "string",
    "incident_type": "string", // Matches IncidentType enum
    "cctv_id": "string", // Optional
    "report_image": "string", // base64 encoded image
    "date": "string", // Optional, format: DD:MM:YYYY
    "time": "string" // Optional, format: HH:MM
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Creates entry in `Report` table, optional link to `CCTV` table

### Owner Notifications

#### List Notifications
- **Endpoint**: `GET /api/notification`
- **Access**: OWNER
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches NotificationStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "title": "string",
        "message": "string",
        "type": "string", // Matches NotificationType enum
        "status": "string", // Matches NotificationStatus enum
        "image": "string", // Optional, base64 encoded image
        "report_id": "string", // Optional
        "created_at": "string",
        "is_read": "boolean"
      }
    ]
  }
  ```
- **Database Model**: `Notification` table filtered by ownerId

### Officer Dashboard

#### Dashboard Counts
- **Endpoint**: `GET /api/officer/count`
- **Access**: OFFICER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "response_time": "minutes",
      "resolve_Case": "percentage",
      "total_report": "integer",
      "active_police": "integer"
    }
  }
  ```
- **Database Model**: Aggregated queries on `Report`, `Assignment`, and `Tracking` tables

#### Case Status Count
- **Endpoint**: `GET /api/officer/case-status`
- **Access**: OFFICER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "total_case": "integer",
      "resolution_rate": "percentage",
      "case_status": {
        "new": "integer",
        "assigned": "integer",
        "in_progress": "integer",
        "verified": "integer",
        "completed": "integer"
      }
    }
  }
  ```
- **Database Model**: Count queries on `Report` table grouped by status

#### Latest Reports
- **Endpoint**: `GET /api/officer/latest-report`
- **Access**: OFFICER
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches ReportStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "title": "string",
        "status": "string", // Matches ReportStatus enum
        "location": "string",
        "created_at": "string",
        "report_image": "string",
        "incident_type": "string", // Matches IncidentType enum
        "cctv_name": "string"
      }
    ]
  }
  ```
- **Database Model**: `Report` table with join to `CCTV` table

#### Officer Notifications
- **Endpoint**: `GET /api/officer/notification`
- **Access**: OFFICER
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches NotificationStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "title": "string",
        "message": "string",
        "location": "string",
        "type": "string", // Matches NotificationType enum
        "status": "string", // Matches NotificationStatus enum
        "created_at": "string"
      }
    ]
  }
  ```
- **Database Model**: `Notification` table filtered by officerId

#### Verify Report
- **Endpoint**: `POST /api/officer/verify/:report_id`
- **Access**: OFFICER
- **Request**:
  ```json
  {
    "report_id": "string",
    "status": "string" // verified, in_progress, completed (matches ReportStatus enum)
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Updates status in `Report` table, creates entry in `AuditLog` table

#### Assign Officer to Report
- **Endpoint**: `POST /api/officer/assign/:report_id`
- **Access**: OFFICER
- **Request**:
  ```json
  {
    "report_id": "string",
    "officer_id": "string"
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Creates entry in `Assignment` table, updates `Report.isAssigned`, creates entries in `Notification` table

#### Available Officers
- **Endpoint**: `GET /api/officer/available`
- **Access**: OFFICER
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "name": "string",
        "phone": "string",
        "status": "string", // Matches OfficerStatus enum
        "location": {
          "latitude": "float",
          "longitude": "float"
        }
      }
    ]
  }
  ```
- **Database Model**: `Officer` table filtered by status

#### Police List
- **Endpoint**: `GET /api/officer/police`
- **Access**: OFFICER
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches PoliceStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "name": "string",
        "phone": "string",
        "status": "string", // Matches PoliceStatus enum
        "location": {
          "latitude": "float",
          "longitude": "float"
        },
        "vehicle_type": "string",
        "license_plate": "string"
      }
    ]
  }
  ```
- **Database Model**: `Police` table with pagination

### Police Dashboard

#### Police Dashboard
- **Endpoint**: `GET /api/police/dashboard`
- **Access**: POLICE
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "active_report": "integer",
      "resolved_case": "percentage"
    }
  }
  ```
- **Database Model**: Aggregated queries on `Report` and `Assignment` tables

#### Active Reports for Police
- **Endpoint**: `GET /api/police/report/active`
- **Access**: POLICE
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches ReportStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "title": "string",
        "status": "string", // Matches ReportStatus enum
        "location": "string",
        "created_at": "string"
      }
    ]
  }
  ```
- **Database Model**: `Report` table joined with `Assignment` table filtered by police id

#### Police Report Detail
- **Endpoint**: `GET /api/police/report/:id`
- **Access**: POLICE
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "id": "string",
      "title": "string",
      "description": "string",
      "status": "string", // Matches ReportStatus enum
      "location": "string",
      "report_image": "string",
      "incident_type": "string", // Matches IncidentType enum
      "created_at": "string"
    }
  }
  ```
- **Database Model**: `Report` table with related data

#### Police Report Tracking
- **Endpoint**: `GET /api/police/report/:id/track`
- **Access**: POLICE
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": {
      "id": "string",
      "title_report": "string",
      "is_nearby": "boolean",
      "officer": {
        "id": "string",
        "name": "string",
        "phone": "string",
        "license_plate": "string",
        "vehicle_type": "string",
        "status": "string" // Matches OfficerStatus enum
      }
    }
  }
  ```
- **Database Model**: `Assignment` table with joins to `Officer`, `Report`, and `Tracking` tables

#### Police Notifications
- **Endpoint**: `GET /api/police/notification`
- **Access**: POLICE
- **Request Parameters**:
  ```
  page: integer
  limit: integer
  status: string (optional, matches NotificationStatus enum)
  search: string (optional)
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string",
    "data": [
      {
        "id": "string",
        "title": "string",
        "message": "string",
        "type": "string", // Matches NotificationType enum
        "status": "string" // Matches NotificationStatus enum
      }
    ]
  }
  ```
- **Database Model**: `Notification` table filtered by policeId

#### Update Report Status (Police)
- **Endpoint**: `POST /api/police/report/:id/status`
- **Access**: POLICE
- **Request**:
  ```json
  {
    "id": "string",
    "status": "string", // in_progress, completed, etc. (matches ReportStatus enum)
    "description": "string" // Optional
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Updates `Report` table, creates entry in `AuditLog` table

#### Update Tracking (Police)
- **Endpoint**: `POST /api/police/report/:id/track`
- **Access**: POLICE
- **Request**:
  ```json
  {
    "id": "string",
    "latitude": "float",
    "longitude": "float",
    "status": "string", // arrived, on_the_way, etc. (matches TrackingStatus enum)
    "description": "string" // Optional
  }
  ```
- **Response**:
  ```json
  {
    "status": "string",
    "message": "string"
  }
  ```
- **Database Model**: Creates entry in `Tracking` table, updates `Assignment` table if needed

## Data Model Alignment

This API specification has been aligned with the following Prisma database models:

- Owner
- Officer
- Police
- CCTV
- Report
- Evidence
- Assignment
- Tracking
- Notification
- AuditLog

All enums in the API match their corresponding enum types in the Prisma schema:
- OfficerStatus
- PoliceStatus
- CCTVStatus
- ReportStatus
- IncidentType
- TrackingStatus
- NotificationType
- NotificationStatus


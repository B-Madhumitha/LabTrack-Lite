# 🧪 LabTrack Lite – R&D Asset & Ticketing Platform

LabTrack Lite is a lightweight full-stack web application designed to manage **lab assets** and **issue tickets** in an R&D environment.  
It provides clear role separation, simple workflows, and a clean UI suitable for hackathons and real-world prototypes.

---

## 🎯 Problem Statement

R&D labs often struggle with:
- Tracking lab equipment (assets)
- Reporting issues against assets
- Managing issue lifecycle efficiently
- Enforcing role-based responsibilities

LabTrack Lite addresses these challenges through a centralized and easy-to-use system.

---

## ✨ Key Features

### 🔐 Role-Based Access Control (RBAC)
(Role simulated for demo purposes)
- **Admin** – Manage lab assets
- **Engineer** – Create issue tickets
- **Technician** – Update ticket status

### 🧰 Asset Management
- Add and view lab assets
- Asset details include name, category, and status

### 🎫 Ticket Management
- Engineers can create tickets
- Technicians can update ticket status
- Valid status flow:
  - Open → InProgress → Closed

### 💬 Ticket Comments
- Add comments to tickets
- View issue discussion history

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- JavaScript
- CSS

**Backend**
- ASP.NET Core (Minimal APIs)
- Entity Framework Core
- SQLite

---

## 🚀 Running the Project Locally

### Backend
bash
cd backend
dotnet run 
Runs at: http://localhost:5284

### Frontend
bash
cd frontend
npm install
npm run dev
Runs at: http://localhost:5173

---

### 🌐 Deployment

Frontend: Deployed as a static React application (Vite build)

Backend: Deployed as a REST API service

Database: SQLite used for simplicity and portability

The frontend communicates with the backend via REST APIs with CORS enabled.

---

### 🧪 Assumptions

Authentication is simulated using role selection (JWT not implemented due to hackathon scope)

Single lab environment

Limited user roles (Admin, Engineer, Technician)

SQLite database used for lightweight deployment

Designed for demonstration and prototype purposes

---

### 🏁 Conclusion

LabTrack Lite demonstrates a complete full-stack solution with:

Clear role-based access control

Real-world R&D lab use case

Clean backend architecture

Simple and intuitive frontend UI

# 🗳️ Election Assistant

## 🚀 Overview
Election Assistant is a smart backend-powered assistant that helps citizens understand the election process, voter registration, and voting guidelines in a simple and accessible way.

---

## 🎯 Problem Statement
Many citizens lack clarity about:
- How to vote
- How to register
- Required documents
- Polling booth details

This leads to confusion and lower participation in elections.

---

## 💡 Solution
Election Assistant provides instant, intelligent responses to user queries related to elections using a simple API-based system.

---

## 🧠 Key Features
- ✅ Smart query handling
- ✅ Context-aware responses (e.g., first-time voters)
- ✅ Guidance for registration and voting
- ✅ Document and ID support
- ✅ Simple and scalable backend

---

## ⚙️ Tech Stack
- Node.js
- Express.js
- Google Cloud Run
- Google Cloud Build

---

## ☁️ Google Cloud Integration
- **Cloud Run** → Serverless deployment
- **Cloud Build** → Automated container build & deployment

---

## 🔍 How It Works
1. User sends a query (`/chat`)
2. Backend processes input using logic-based routing
3. Returns relevant response

---

## 📡 API Endpoint
POST `/chat`

### Example Request:
```json
{
  "message": "How to vote?"
}

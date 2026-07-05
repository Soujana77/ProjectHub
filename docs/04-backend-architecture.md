# Backend Architecture

This document defines the backend architecture of ProjectHub.

The backend provides secure REST APIs for the frontend while maintaining clean separation between routing, business logic, and database access.

---

# Technology Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* Bcrypt
* Cloudinary

---

# Backend Philosophy

The backend is responsible for:

* Authentication
* Business logic
* Database operations
* File management
* API responses

It should never contain frontend-specific logic.

---

# Folder Structure

```text
backend/

src/

├── config/
├── controllers/
├── services/
├── models/
├── routes/
├── middlewares/
├── validations/
├── utils/
├── constants/
├── database/
├── uploads/
├── app.js
└── server.js
```

---

# Request Lifecycle

Every request follows the same flow.

```text
Client

↓

Route

↓

Middleware

↓

Controller

↓

Service

↓

Model

↓

MongoDB

↓

Response
```

---

# Controller Responsibilities

Controllers should:

* Receive requests
* Validate input
* Call services
* Return responses

Business logic belongs in services.

---

# Service Responsibilities

Services handle:

* Business rules
* Database operations
* External integrations
* Complex processing

---

# Middleware

Examples:

* Authentication
* Authorization
* Validation
* Error Handling
* Request Logging

---

# Response Format

Successful responses

```json
{
  "success": true,
  "message": "",
  "data": {}
}
```

Error responses

```json
{
  "success": false,
  "message": "",
  "errors": []
}
```

---

# Environment Variables

Sensitive configuration should always remain inside `.env`.

Examples:

* MongoDB URI
* JWT Secret
* Cloudinary Credentials
* Email Credentials
* AI Keys (Future)

---

# Future Expansion

The architecture should support:

* Socket.io
* AI Services
* Email Verification
* Notifications

without requiring major structural changes.

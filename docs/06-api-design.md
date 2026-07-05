# API Design

## Overview

ProjectHub follows a RESTful API architecture.

All communication between the frontend and backend happens through REST APIs.

API Base URL

```text
/api/v1
```

Versioning allows future API improvements without breaking existing clients.

---

# Authentication APIs

```text
POST   /auth/register

POST   /auth/login

POST   /auth/logout

POST   /auth/forgot-password

POST   /auth/reset-password

GET    /auth/me
```

---

# User APIs

```text
GET    /users

GET    /users/:id

PATCH  /users/:id

DELETE /users/:id
```

---

# Project APIs

```text
GET    /projects

GET    /projects/:id

POST   /projects

PATCH  /projects/:id

DELETE /projects/:id
```

---

# Team APIs

```text
GET    /teams

POST   /teams

PATCH  /teams/:id

DELETE /teams/:id
```

---

# Task APIs

```text
GET    /tasks

POST   /tasks

PATCH  /tasks/:id

DELETE /tasks/:id
```

---

# Future APIs

* Messages
* Notifications
* Bookmarks
* AI Recommendations
* Analytics

---

# Standard Response

Success

```json
{
  "success": true,
  "message": "Operation completed successfully.",
  "data": {}
}
```

Failure

```json
{
  "success": false,
  "message": "Operation failed.",
  "errors": []
}
```

---

# HTTP Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Resource Created      |
| 400  | Bad Request           |
| 401  | Unauthorized          |
| 403  | Forbidden             |
| 404  | Not Found             |
| 409  | Conflict              |
| 500  | Internal Server Error |

---

# API Principles

* RESTful naming conventions
* Consistent response structure
* Secure endpoints
* JWT-protected private routes
* Validation before business logic
* Clear error messages
* Versioned endpoints

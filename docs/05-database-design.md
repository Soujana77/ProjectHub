# Database Design

ProjectHub uses MongoDB Atlas as its primary database.

The database is designed to support collaboration, scalability, and future AI-powered features.

---

# Core Collections

## Users

Stores:

* Profile Information
* Authentication
* Skills
* Portfolio
* Social Links

---

## Projects

Stores:

* Project Details
* Description
* Technologies
* Status
* Owner
* Visibility

---

## Teams

Stores:

* Team Members
* Roles
* Invitations
* Project Association

---

## Tasks

Stores:

* Task Title
* Description
* Status
* Priority
* Assignee
* Due Date

---

## Resources

Stores:

* Documents
* Images
* External Links
* Uploaded Files

---

# Future Collections

* Messages
* Notifications
* Bookmarks
* Activities
* AI Recommendations

---

# Relationships

```text
User

│

├── Creates → Project

├── Joins → Team

├── Assigned → Task

├── Sends → Message

├── Receives → Notification

└── Saves → Bookmark
```

---

# Authentication

Passwords are never stored directly.

Authentication uses:

* JWT
* Bcrypt

---

# Database Principles

* Keep collections focused.
* Avoid unnecessary duplication.
* Use ObjectId references between collections.
* Optimize for readability before optimization.

---

# Future Scaling

The schema should allow:

* Multiple teams
* Multiple projects
* AI recommendations
* Real-time collaboration
* Analytics
* Portfolio generation

without redesigning the database.

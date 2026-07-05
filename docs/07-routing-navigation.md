# Routing & Navigation

## Routing Philosophy

ProjectHub separates public pages from authenticated application pages.

All authenticated routes are grouped under:

```text
/app
```

This keeps the routing structure clean and scalable.

---

# Public Routes

```text
/

about

discover

contact

login

signup

forgot-password
```

---

# Protected Routes

```text
/ app/dashboard

/ app/discover

/ app/projects

/ app/workspace

/ app/tasks

/ app/messages

/ app/calendar

/ app/profile

/ app/settings
```

---

# Layouts

## Public Layout

Used for:

* Landing Page
* About
* Contact

---

## Auth Layout

Used for:

* Login
* Register
* Forgot Password

---

## Dashboard Layout

Contains

* Sidebar
* Top Navigation
* Main Content
* Footer (if required)

---

# Navigation Structure

Sidebar

```text
Dashboard

Discover

Projects

Workspace

Tasks

Inbox

Calendar

Profile

Settings
```

Top Navigation

* Search
* Notifications
* User Menu

---

# Routing Principles

* One responsibility per page
* Consistent URL naming
* Protected routes require authentication
* Nested routing where appropriate
* Lazy loading for feature pages

---

# Future Navigation

Future modules should integrate into the existing navigation instead of introducing unnecessary top-level sections.

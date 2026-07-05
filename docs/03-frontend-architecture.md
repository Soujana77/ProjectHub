# Frontend Architecture

This document defines the frontend architecture of ProjectHub. The goal is to build a scalable, maintainable, and reusable React application.

---

# Technology Stack

* React (Vite)
* Tailwind CSS
* React Router
* Axios
* Framer Motion
* React Icons

---

# Architecture Philosophy

The frontend follows a hybrid architecture:

* Shared reusable components
* Feature-based modules
* Centralized routing
* Clear separation of UI and business logic

This approach allows the application to scale without frequent restructuring.

---

# Folder Structure

```text
frontend/

src/

├── assets/
├── components/
├── features/
├── layouts/
├── pages/
├── routes/
├── services/
├── hooks/
├── context/
├── utils/
├── constants/
├── styles/
├── App.jsx
└── main.jsx
```

---

# Shared Components

Reusable components belong inside `components/`.

Examples:

* Navigation
* Buttons
* Cards
* Inputs
* Modals
* Loaders
* Empty States

Feature-specific components should remain inside their respective feature folders until they become reusable.

---

# Feature Modules

Each feature owns its own components and logic.

Examples:

* Authentication
* Dashboard
* Discover
* Projects
* Workspace
* Tasks
* Inbox
* Profile

---

# Layout Strategy

The application uses dedicated layouts.

Public Layout

* Landing page
* About
* Contact

Authentication Layout

* Login
* Register
* Forgot Password

Dashboard Layout

* Sidebar
* Navbar
* Main Content Area

---

# State Management

Global state will initially use React Context.

Context is reserved for:

* Authentication
* Theme (if introduced)
* User session

Feature-specific state should remain local whenever possible.

---

# API Communication

All backend communication goes through the `services/` directory.

Components should never call Axios directly.

---

# Component Principles

* Single responsibility
* Reusable
* Small and focused
* Easy to test
* Easy to maintain

---

# Future Growth

As ProjectHub expands, additional features should fit into the existing architecture rather than changing it.

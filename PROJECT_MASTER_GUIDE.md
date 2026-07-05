PROJECT_MASTER_GUIDE.md

1. Project Overview

2. Vision

3. Goals

4. Non Goals

5. Design Philosophy

6. UI Design System

7. Color Palette

8. Typography

9. Layout Rules

10. Animation Rules

11. Frontend Architecture

12. Backend Architecture

13. Database Design

14. Routing

15. API Standards

16. Engineering Standards

17. Folder Structure

18. Git Workflow

19. Roadmap

20. Design Decisions

21. Component Strategy

22. Future Features

23. Development Rules

24. Current Status

# ProjectHub — Project Master Guide

## Project Summary

ProjectHub is a premium collaboration platform built specifically for college students to discover innovative projects, build teams, collaborate efficiently, and showcase completed work.

**Tagline**

> Discover. Collaborate. Build. Innovate.

---

# Product Vision

ProjectHub is **not**:

* A College ERP
* A Student Management System
* An Admin Dashboard

It is a collaboration platform inspired by GitHub, LinkedIn, Notion, and Discord, tailored for student innovation.

---

# Technology Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router
* Framer Motion
* Axios
* React Icons

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* JWT
* Bcrypt
* Cloudinary

### Future

* Socket.io
* AI Features
* Email Verification

---

# Design Language

The interface should always feel:

* Premium
* Editorial
* Modern
* Minimal
* Elegant
* Calm

Official Colors

* Background: #FFF2D7
* Card: #FFF8EC
* Primary Accent: #6D1026
* Secondary Accent: #8C1D40
* Primary Text: #3A2B2B

Never redesign approved pages without discussion.

---

# Architecture

Frontend

* Hybrid architecture
* Shared reusable components
* Feature-based organization

Backend

* Express REST API
* Controller → Service → Model architecture
* JWT Authentication
* MongoDB Atlas

---

# Folder Structure

Root

* frontend/
* backend/
* docs/
* assets/

Frontend

* assets
* components
* features
* layouts
* pages
* routes
* services
* hooks
* context
* utils
* constants
* styles

Backend

* config
* controllers
* services
* models
* routes
* middlewares
* validations
* utils
* constants
* database

---

# Design Rules

* Cream-first interface
* Editorial spacing
* Large typography
* Rounded cards
* Thin borders
* Soft shadows
* Purposeful animations
* Desktop-first responsive design

---

# Engineering Rules

* Complete one milestone at a time.
* Review before every commit.
* Prefer reusable components.
* Avoid duplicate code.
* Preserve approved architecture.
* Use Conventional Commits.

---

# Git Workflow

Branches

* main
* develop
* feature/*
* bugfix/*

Commit Types

* feat
* fix
* docs
* refactor
* style
* test
* chore

---

# Development Roadmap

Phase 1 — Planning ✅

Phase 2 — Frontend Foundation

Phase 3 — Core Features

Phase 4 — Backend

Phase 5 — Advanced Features

Phase 6 — AI Features

Phase 7 — Testing & Deployment

---

# Documentation

Detailed technical information is available inside the `docs/` directory.

Important documents include:

* Project Constitution
* Design System
* Frontend Architecture
* Backend Architecture
* Database Design
* API Design
* Routing & Navigation
* Engineering Standards
* Roadmap
* Current Progress

---

# Instructions for Future Development Sessions

Before beginning any implementation:

1. Read this document.
2. Read `docs/12-current-progress.md`.
3. Continue from the next unfinished milestone.
4. Do not redesign approved pages.
5. Do not change the architecture without discussion.
6. Follow the design system and engineering standards.
7. Complete one milestone at a time with review, cleanup, commit, and push before moving forward.

This document is the primary onboarding reference for all future development sessions.

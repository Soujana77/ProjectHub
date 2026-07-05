# Design System

This document defines the visual language of ProjectHub. Every page, component, and interaction should follow these standards to maintain a consistent user experience.

---

# Design Identity

ProjectHub is designed to feel:

* Premium
* Editorial
* Calm
* Modern
* Minimal
* Elegant

The design emphasizes readability, whitespace, and subtle visual hierarchy over decorative effects.

---

# Color Palette

| Purpose          | Color     |
| ---------------- | --------- |
| Background       | `#FFF2D7` |
| Card Surface     | `#FFF8EC` |
| Primary Accent   | `#6D1026` |
| Secondary Accent | `#8C1D40` |
| Primary Text     | `#3A2B2B` |
| Secondary Text   | `#72645A` |
| Border           | `#E5D6B8` |
| Hover            | `#F8E8C8` |
| Success          | `#4F7A5A` |
| Warning          | `#C48A2A` |
| Error            | `#A63A3A` |

Never use pure white, pure black, neon colors, or bright gradients.

---

# Typography

Primary Font

* Inter

Fallback

* system-ui
* sans-serif

Typography Scale

* Display – 56px
* H1 – 40px
* H2 – 32px
* H3 – 24px
* H4 – 20px
* Body Large – 18px
* Body – 16px
* Small – 14px
* Caption – 12px

---

# Spacing System

Use an 8-point spacing scale.

| Token | Size |
| ----- | ---- |
| xs    | 4px  |
| sm    | 8px  |
| md    | 16px |
| lg    | 24px |
| xl    | 32px |
| 2xl   | 48px |
| 3xl   | 64px |
| 4xl   | 80px |

Avoid arbitrary spacing values unless necessary.

---

# Border Radius

| Component | Radius      |
| --------- | ----------- |
| Buttons   | 12px        |
| Inputs    | 12px        |
| Cards     | 20px        |
| Images    | 16px        |
| Modals    | 24px        |
| Pills     | Full Radius |

---

# Shadows

ProjectHub relies primarily on borders.

Shadows should remain subtle and be used only to communicate elevation.

* Level 0 – None
* Level 1 – Standard Cards
* Level 2 – Hover State
* Level 3 – Modals & Drawers

---

# Motion

Animations should communicate state, not decoration.

Recommended durations:

* Hover – 150ms
* Button Press – 120ms
* Card Hover – 200ms
* Modal – 250ms
* Drawer – 300ms
* Page Transition – 300–400ms

Avoid excessive animation, bouncing effects, and distracting motion.

---

# Layout Principles

* Desktop-first approach
* Editorial spacing
* Large section headings
* Soft rounded containers
* Thin borders
* Consistent alignment
* Clear visual hierarchy

---

# Responsive Strategy

* Mobile: <640px
* Small Tablet: 640–767px
* Tablet: 768–1023px
* Laptop: 1024–1279px
* Desktop: 1280–1535px
* Large Desktop: ≥1536px

The same design language should be preserved across all screen sizes.

---

# Component Philosophy

Components should be:

* Reusable
* Consistent
* Accessible
* Easy to maintain

New components should follow the existing design language instead of introducing new visual styles.

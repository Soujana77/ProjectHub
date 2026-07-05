# Engineering Standards

## Objective

Maintain a clean, scalable, and professional codebase throughout the ProjectHub lifecycle.

---

# Naming Conventions

Folders

* kebab-case

Components

* PascalCase

Pages

* PascalCase

Hooks

* useSomething

Utilities

* camelCase

Services

* featureService.js

---

# Import Order

1. React
2. Third-party libraries
3. Services
4. Hooks
5. Context
6. Components
7. Assets
8. Styles

---

# Component Guidelines

Every component should:

* Have a single responsibility.
* Be reusable where appropriate.
* Avoid unnecessary complexity.
* Follow the design system.

---

# Code Principles

* Readability over cleverness.
* Avoid duplicate code.
* Small focused functions.
* Consistent formatting.
* Meaningful naming.

---

# Git Workflow

Main

```text
main
```

Development

```text
develop
```

Feature Branches

```text
feature/<feature-name>
```

Bug Fixes

```text
bugfix/<issue-name>
```

---

# Commit Convention

Examples

```text
feat:

fix:

docs:

style:

refactor:

test:

chore:
```

---

# Review Checklist

Before every commit

* Does it follow the design system?
* Is the component reusable?
* Is naming consistent?
* Is the architecture preserved?
* Is responsive behavior considered?
* Is unnecessary duplication removed?

---

# Development Workflow

Each milestone follows:

```text
Plan

↓

Implement

↓

Review

↓

Cleanup

↓

Commit

↓

Push

↓

Next Milestone
```

---

# Long-Term Goal

Every contribution should improve the maintainability, scalability, and overall quality of ProjectHub.

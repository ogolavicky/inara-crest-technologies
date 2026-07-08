# Hosting Platform Backend

- Purpose of the backend.
- Required Python version.
- How to install dependencies (uv sync --group dev).
- How to run the server (uv run python manage.py runserver).
- Coding standards.
- Links to project documentation in the root docs/ directory.


The backend powers the Hosting Platform, providing REST APIs and business logic for domain registration, hosting management, customer accounts, billing, payments, and integrations with external service providers such as the Namecheap Reseller API.

This backend is built with **Python**, **Django**, **Django REST Framework**, **PostgreSQL**, and follows a modular, domain-driven architecture designed for long-term maintainability and scalability.

---

# Technology Stack

* Python 3.13+
* Django 5.2+
* Django REST Framework
* PostgreSQL
* django-environ
* uv (dependency management)
* Ruff
* Black
* pytest
* mypy
* pre-commit

---

# Project Structure

```text
backend/
│
├── apps/                  # Business applications
│   ├── common/
│   ├── accounts/
│   ├── domains/
│   ├── hosting/
│   ├── payments/
│   ├── orders/
│   ├── billing/
│   ├── notifications/
│   ├── reseller/
│   ├── analytics/
│   └── dashboard/
│
├── config/                # Django configuration
│   ├── settings/
│   ├── urls.py
│   ├── asgi.py
│   └── wsgi.py
│
├── logs/
├── media/
├── static/
├── tests/
│
├── manage.py
├── pyproject.toml
├── uv.lock
├── .env
├── .env.example
└── README.md
```

---

# Architecture

The project follows a modular architecture where each Django application owns a single business capability.

Examples include:

* Accounts
* Domains
* Hosting
* Orders
* Payments
* Billing
* Notifications

Applications communicate through well-defined service interfaces rather than directly depending on each other's internal implementation.

External providers such as Namecheap, Cloudflare, payment gateways, and future integrations are isolated within the `reseller` application to ensure business logic remains independent of third-party APIs.

---

# Development Setup

## Install dependencies

```bash
uv sync --group dev
```

---

## Activate the virtual environment (optional)

Most commands can be executed directly with `uv run`.

If you prefer an activated environment:

### Windows

```powershell
.venv\Scripts\Activate.ps1
```

### Linux/macOS

```bash
source .venv/bin/activate
```

---

## Run the development server

```bash
uv run python manage.py runserver
```

---

## Apply migrations

```bash
uv run python manage.py migrate
```

---

## Create a superuser

```bash
uv run python manage.py createsuperuser
```

---

# Environment Variables

Configuration is loaded from:

```text
backend/.env
```

A template is available in:

```text
backend/.env.example
```

Secrets must never be committed to source control.

---

# Code Quality

Before committing code, ensure the project passes formatting, linting, and tests.

Formatting:

```bash
uv run black .
```

Linting:

```bash
uv run ruff check .
```

Tests:

```bash
uv run pytest
```

Type checking (when enabled):

```bash
uv run mypy .
```

Pre-commit hooks should be installed to automate these checks during development.

---

# Development Principles

The backend follows several architectural principles:

* One Django application owns one business capability.
* Business logic belongs in services, not views.
* Shared functionality belongs in the `common` application.
* Configuration is provided through environment variables.
* External integrations are isolated from business logic.
* Keep views thin and services focused.
* Prefer composition over duplication.
* Write clear, maintainable, and well-documented code.

---

# Documentation

Project documentation is maintained in the repository's `docs/` directory.

Topics include:

* System architecture
* API documentation
* Database design
* Deployment
* Architecture Decision Records (ADRs)

Developers should consult the documentation before introducing significant architectural changes.

---

# Contribution Workflow

1. Pull the latest changes.
2. Create a feature branch.
3. Implement the change.
4. Run formatting, linting, and tests.
5. Commit with a descriptive message.
6. Open a pull request for review.

---

# License

This backend is part of the Hosting Platform project and is proprietary software.

Unauthorized copying, modification, distribution, or commercial use is prohibited unless explicitly authorized by the project owner.

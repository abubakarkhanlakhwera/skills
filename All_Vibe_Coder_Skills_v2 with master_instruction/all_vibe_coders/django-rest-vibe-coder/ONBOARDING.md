# 🚀 ONBOARDING.md — Django REST New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | Python 3.12+ | 5.0.x | [reason] |
| Framework | Django 5.x + DRF | — | [reason] |
| Database | PostgreSQL via Django ORM | — | [reason] |
| Auth | JWT via djangorestframework-simplejwt | — | [reason] |
| Deploy | Docker + gunicorn + nginx / Railway | — | [reason] |

## First-Time Setup
```bash
# 1. Clone the repo
git clone [repo-url]
cd [project-name]

# 2. Install dependencies
[install command for this stack]

# 3. Copy environment config
cp .env.example .env
# Edit .env with your local values

# 4. Set up database
[db setup command]

# 5. Run the project
[run command]
```

## How We Work

### Branching Strategy
- `main` — production-ready code only
- `develop` — integration branch
- `feature/TICKET-description` — feature branches off develop
- PRs require 1 review and passing CI before merge

### Code Standards
See SKILL.md and INSTRUCTIONS.md for the full AI-enforced standards.
The key rules:
- App-per-domain structure: items/, users/, orders/ each with models, views, serializers, services
- services.py per app holds all business logic — views only handle HTTP
- Custom exception handler returns consistent {error: {code, detail}} shape

### Things We Never Do
- Business logic in serializers or views — always services.py
- QuerySets without select_related/prefetch_related for related objects
- Raw SQL without documentation and security review

## Key Files to Read First
1. `INSTRUCTIONS.md` — condensed coding standards
2. `PATTERNS.md` — approved patterns for this project
3. `ANTI_PATTERNS.md` — what not to do and why
4. `DECISIONS.md` — why key decisions were made
5. `PROJECT_CONTEXT.md` — current project state

## Getting Help
- Check `SESSION_LOG.md` for recent context
- Check `DECISIONS.md` before asking "why do we do X this way?"
- Ask in [team Slack channel / Discord / email]

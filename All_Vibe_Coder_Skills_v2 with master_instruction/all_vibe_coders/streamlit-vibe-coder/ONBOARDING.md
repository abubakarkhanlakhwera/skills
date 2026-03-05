# 🚀 ONBOARDING.md — Streamlit New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | Python 3.11+ | 1.35.x | [reason] |
| Framework | Streamlit 1.35+ | — | [reason] |
| Database | PostgreSQL via SQLAlchemy + st.cache_resource for connection | — | [reason] |
| Auth | streamlit-authenticator or Okta OIDC | — | [reason] |
| Deploy | Streamlit Community Cloud / Docker + nginx | — | [reason] |

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
- One Python file per page in pages/ — auto-registered by Streamlit
- Data loading functions in src/data/ decorated with @st.cache_data
- DB engine in src/db.py decorated with @st.cache_resource

### Things We Never Do
- Module-level mutable state — always st.session_state
- Mutating @st.cache_data return values — copy before mutating
- Heavy computation inline in page render — always @st.cache_data functions

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

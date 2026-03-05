# 🚀 ONBOARDING.md — dbt New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | SQL / Jinja | 1.8.x | [reason] |
| Framework | dbt Core / dbt Cloud | — | [reason] |
| Database | BigQuery / Snowflake / Redshift / DuckDB | — | [reason] |
| Auth | Service account or SSO via dbt Cloud | — | [reason] |
| Deploy | dbt Cloud Jobs / GitHub Actions + dbt CLI | — | [reason] |

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
- sources.yml defines all raw tables with freshness checks
- stg_ models: one-to-one with source, only renaming and light casting
- int_ models: business joins and transformations

### Things We Never Do
- Hardcoded schema.table references — always {{ ref() }} or {{ source() }}
- Business logic in staging models — stg_ is for cleaning only
- Missing primary key tests — every final model must have unique + not_null

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

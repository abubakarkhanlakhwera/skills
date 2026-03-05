# 🚀 ONBOARDING.md — Spring Boot New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | Java 21 / Kotlin | 3.3.x | [reason] |
| Framework | Spring Boot 3.x | — | [reason] |
| Database | PostgreSQL via Spring Data JPA + Hibernate | — | [reason] |
| Auth | Spring Security 6 + JWT or OAuth2 Resource Server | — | [reason] |
| Deploy | Docker + Spring Boot layered JAR / Railway / Fly.io | — | [reason] |

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
- MapStruct for entity↔DTO mapping — never manual mapping in services
- Spring Security method-level security with @PreAuthorize for fine-grained access
- Flyway for DB migrations — never manual schema changes

### Things We Never Do
- Field injection with @Autowired — always constructor injection
- Bidirectional JPA relationships without careful fetch strategy — causes N+1
- Entities exposed directly via REST — always DTOs with MapStruct

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

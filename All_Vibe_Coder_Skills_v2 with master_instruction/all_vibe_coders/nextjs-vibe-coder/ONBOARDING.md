# 🚀 ONBOARDING.md — Next.js New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | TypeScript | 14.x | [reason] |
| Framework | Next.js 14+ App Router | — | [reason] |
| Database | PostgreSQL via Prisma ORM | — | [reason] |
| Auth | NextAuth.js v5 (Auth.js) | — | [reason] |
| Deploy | Vercel / Docker + nginx | — | [reason] |

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
- Route groups for layout sharing: (marketing)/, (dashboard)/
- Server Actions for all mutations — co-located in actions.ts per feature
- Parallel routes for modals: @modal/(...) pattern

### Things We Never Do
- useEffect for data fetching — always use RSC or React Query for CSR
- API routes for mutations that could be Server Actions
- Client components wrapping entire pages — push 'use client' to leaf nodes

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

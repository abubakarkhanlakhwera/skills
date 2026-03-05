# 🚀 ONBOARDING.md — React Native New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | TypeScript | 51.x | [reason] |
| Framework | React Native 0.73+ + Expo SDK | — | [reason] |
| Database | SQLite via expo-sqlite or remote via React Query | — | [reason] |
| Auth | expo-secure-store + JWT or Expo AuthSession | — | [reason] |
| Deploy | EAS Build + EAS Submit for App Store / Play Store | — | [reason] |

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
- Feature folders: features/items/screens/, features/items/hooks/, features/items/api/
- React Query for all server state — Zustand for client-only UI state
- All API calls in features/*/api/*.ts — never inline fetch in components

### Things We Never Do
- Inline fetch calls inside components
- ScrollView with .map() for lists — always FlatList
- StyleSheet objects defined inside component render — always outside

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

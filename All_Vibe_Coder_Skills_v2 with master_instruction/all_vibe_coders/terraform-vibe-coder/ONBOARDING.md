# 🚀 ONBOARDING.md — Terraform New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | HCL | 1.8.x | [reason] |
| Framework | Terraform 1.x | — | [reason] |
| Database | RDS PostgreSQL (provisioned via Terraform) | — | [reason] |
| Auth | AWS IAM roles / service accounts — never static credentials | — | [reason] |
| Deploy | GitHub Actions + terraform plan/apply / Atlantis | — | [reason] |

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
- Root module wires together child modules — never resources directly in root
- terraform-aws-modules for common patterns (VPC, ECS, RDS) — don't reinvent
- Workspaces or separate state files per environment (dev/staging/prod)

### Things We Never Do
- Resources directly in root module — always encapsulate in child modules
- count for resources with identity (e.g., S3 buckets) — always for_each with meaningful key
- Hardcoded region, account ID, or AMI IDs — always variables or data sources

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

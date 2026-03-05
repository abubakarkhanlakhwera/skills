## Terraform Development Standards
> Sourced from: `.github/skills/terraform-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing resources, modules, and state first
- Plan before apply — always mentally simulate `terraform plan` before suggesting changes
- Fix roots, not symptoms — trace dependency cycles, state drift, provider errors to their cause
- Match the stack — Terraform 1.x, target cloud provider only
- One thing at a time — no refactoring AND adding resources in one response

### Coding Style
- Modules for any resource group that repeats or belongs together — never copy-paste resource blocks
- `variables.tf`, `outputs.tf`, `main.tf`, `versions.tf` standard layout per module
- Pin provider versions in `versions.tf` with `~>` — never unpinned
- `locals {}` for computed or repeated values — never inline complex expressions in resource arguments
- `for_each` over `count` for resources with meaningful identity
- Tag every resource: environment, project, managed-by=terraform
- Remote backend for state (S3+DynamoDB, GCS, Terraform Cloud) — never local `terraform.tfstate` in production
- `sensitive = true` on all output/variable values containing secrets
- Never hardcode credentials, account IDs, or region strings — use variables or data sources
- Remove unused variables, dead resources, commented-out blocks immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch plan errors — fix the root resource definition

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory — provider APIs change; always verify

### Hard Rules (Never Break)
- ❌ Never hardcode credentials or account IDs
- ❌ No local state in production
- ❌ No count for resources with meaningful identity
- ❌ No refactoring working modules without permission
- ❌ Never end a session without a next step

# ✅ PATTERNS.md — Terraform Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Root module wires together child modules — never resources directly in root
- terraform-aws-modules for common patterns (VPC, ECS, RDS) — don't reinvent
- Workspaces or separate state files per environment (dev/staging/prod)
- tfvars files per environment: dev.tfvars, prod.tfvars — committed to VCS

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `hashicorp/aws` | [reason it was chosen] |
| `hashicorp/google` | [reason it was chosen] |
| `hashicorp/azurerm` | [reason it was chosen] |
| `terraform-aws-modules` | [reason it was chosen] |

## Approved Naming Conventions
- [e.g., Files: kebab-case | Classes: PascalCase | Functions: camelCase]
- [e.g., Feature branches: feature/TICKET-description]
- [e.g., Commit format: type(scope): description]

## Approved Testing Patterns
- [e.g., Unit tests co-located with source in __tests__/ subfolder]
- [e.g., Integration tests in /tests/integration/]
- [e.g., Test naming: describe('ClassName') → it('should do X when Y')]

## Recently Added Patterns
| Date | Pattern | Reason |
|------|---------|--------|
| [YYYY-MM-DD] | [pattern] | [why it was added] |

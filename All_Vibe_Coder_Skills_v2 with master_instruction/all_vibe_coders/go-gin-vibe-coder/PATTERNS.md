# ✅ PATTERNS.md — Go + Gin Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- cmd/api/main.go wires dependencies — handlers receive them via struct fields
- internal/handler/ for HTTP, internal/service/ for logic, internal/store/ for DB
- sqlc for type-safe SQL queries — no raw string queries
- Structured logging with zap — never fmt.Println in handlers

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `gin` | [reason it was chosen] |
| `pgx` | [reason it was chosen] |
| `sqlc` | [reason it was chosen] |
| `golang-jwt` | [reason it was chosen] |
| `zap` | [reason it was chosen] |

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

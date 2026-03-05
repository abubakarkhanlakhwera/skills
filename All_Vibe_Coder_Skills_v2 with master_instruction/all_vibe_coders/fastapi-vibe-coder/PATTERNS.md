# ✅ PATTERNS.md — FastAPI Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Router per domain: app/routers/items.py, app/routers/users.py
- Service layer: app/services/item_service.py holds all business logic
- Async DB sessions injected via Depends(get_db)
- All responses use typed response_model= — never raw dicts

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `fastapi` | [reason it was chosen] |
| `pydantic` | [reason it was chosen] |
| `sqlalchemy` | [reason it was chosen] |
| `alembic` | [reason it was chosen] |
| `httpx` | [reason it was chosen] |

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

# ✅ PATTERNS.md — Django REST Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- App-per-domain structure: items/, users/, orders/ each with models, views, serializers, services
- services.py per app holds all business logic — views only handle HTTP
- Custom exception handler returns consistent {error: {code, detail}} shape
- Celery for async tasks — never slow operations in views

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `djangorestframework` | [reason it was chosen] |
| `django-filter` | [reason it was chosen] |
| `simplejwt` | [reason it was chosen] |
| `celery` | [reason it was chosen] |
| `django-cors-headers` | [reason it was chosen] |

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

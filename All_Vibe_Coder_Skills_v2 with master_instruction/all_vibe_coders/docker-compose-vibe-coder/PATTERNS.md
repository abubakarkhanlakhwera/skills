# ✅ PATTERNS.md — Docker + Compose Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Multi-stage Dockerfile: builder stage + minimal runtime stage
- docker-compose.yml for dev, docker-compose.prod.yml overrides for production
- .env file for local dev secrets — never committed, use .env.example
- Traefik as reverse proxy — auto-discovers services via Docker labels

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `docker` | [reason it was chosen] |
| `docker-compose` | [reason it was chosen] |
| `traefik` | [reason it was chosen] |
| `watchtower` | [reason it was chosen] |

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

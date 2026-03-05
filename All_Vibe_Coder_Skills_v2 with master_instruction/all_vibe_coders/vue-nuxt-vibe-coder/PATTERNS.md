# ✅ PATTERNS.md — Vue + Nuxt Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- composables/ for all shared logic — auto-imported, prefixed use
- server/api/ for all backend routes — full-stack in one repo
- Pinia stores in stores/ — auto-imported, one store per domain
- Zod validation in server/api/ routes before DB operations

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `nuxt` | [reason it was chosen] |
| `pinia` | [reason it was chosen] |
| `vueuse` | [reason it was chosen] |
| `zod` | [reason it was chosen] |
| `tailwindcss` | [reason it was chosen] |

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

# ✅ PATTERNS.md — Node.js Backend Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- routes/ → controllers/ → services/ — strict three-layer separation
- All env via config.ts using zod schema validation at startup
- Async error wrapper: asyncHandler(fn) wraps every async route
- Structured logging with pino — never console.log in production

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `express` | [reason it was chosen] |
| `zod` | [reason it was chosen] |
| `prisma` | [reason it was chosen] |
| `jsonwebtoken` | [reason it was chosen] |
| `pino` | [reason it was chosen] |

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

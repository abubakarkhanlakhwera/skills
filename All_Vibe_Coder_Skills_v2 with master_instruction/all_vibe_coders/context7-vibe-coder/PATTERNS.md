# ✅ PATTERNS.md — Context7 Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Always resolve before writing: resolve-library-id → get-library-docs → write code
- Focused topic fetching — always specify topic: to limit doc scope
- Version-specific fetching — include version in library name when needed
- Re-resolve after major version upgrades — docs change between majors

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `@upstash/context7-mcp` | [reason it was chosen] |

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

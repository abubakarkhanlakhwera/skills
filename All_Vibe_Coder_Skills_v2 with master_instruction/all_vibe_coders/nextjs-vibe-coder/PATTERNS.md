# ✅ PATTERNS.md — Next.js Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Route groups for layout sharing: (marketing)/, (dashboard)/
- Server Actions for all mutations — co-located in actions.ts per feature
- Parallel routes for modals: @modal/(...) pattern
- Data fetching in RSC layout.tsx for shared data, page.tsx for page-specific

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `next` | [reason it was chosen] |
| `prisma` | [reason it was chosen] |
| `next-auth` | [reason it was chosen] |
| `tailwindcss` | [reason it was chosen] |
| `zod` | [reason it was chosen] |

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

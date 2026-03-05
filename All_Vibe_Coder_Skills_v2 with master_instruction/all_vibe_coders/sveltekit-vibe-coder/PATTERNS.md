# ✅ PATTERNS.md — SvelteKit Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Form actions for all mutations — progressively enhanced with use:enhance
- load() functions for all server data — never fetch in onMount
- $lib/server/ for server-only modules — never imported in .svelte files directly
- Zod schema validation in +page.server.ts actions before DB calls

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `sveltekit` | [reason it was chosen] |
| `drizzle-orm` | [reason it was chosen] |
| `lucia` | [reason it was chosen] |
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

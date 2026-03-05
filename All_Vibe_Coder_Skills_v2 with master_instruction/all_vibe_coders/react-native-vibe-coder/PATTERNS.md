# ✅ PATTERNS.md — React Native Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Feature folders: features/items/screens/, features/items/hooks/, features/items/api/
- React Query for all server state — Zustand for client-only UI state
- All API calls in features/*/api/*.ts — never inline fetch in components
- Navigation typed with RootStackParamList — no untyped route names

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `expo` | [reason it was chosen] |
| `react-navigation` | [reason it was chosen] |
| `react-query` | [reason it was chosen] |
| `zustand` | [reason it was chosen] |
| `expo-secure-store` | [reason it was chosen] |

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

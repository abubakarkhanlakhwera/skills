# ✅ PATTERNS.md — Tauri Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- All Rust business logic in src-tauri/src/commands/ modules
- All commands return Result<T, String> — never panic
- Frontend invokes via typed wrappers in src/lib/api.ts
- State managed via tauri::State<T> with Mutex — never global statics

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `tauri` | [reason it was chosen] |
| `serde` | [reason it was chosen] |
| `tokio` | [reason it was chosen] |
| `tauri-plugin-store` | [reason it was chosen] |
| `tauri-plugin-http` | [reason it was chosen] |

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

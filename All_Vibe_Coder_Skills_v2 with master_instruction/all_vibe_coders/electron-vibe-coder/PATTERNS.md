# ✅ PATTERNS.md — Electron Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- IPC channels namespaced by feature: 'items:getAll', 'items:create'
- All DB access in main process only — never in renderer
- Preload exposes typed API object — never raw ipcRenderer
- Main process modules in src/main/modules/ — one file per domain

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `electron` | [reason it was chosen] |
| `better-sqlite3` | [reason it was chosen] |
| `keytar` | [reason it was chosen] |
| `electron-builder` | [reason it was chosen] |
| `electron-updater` | [reason it was chosen] |

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

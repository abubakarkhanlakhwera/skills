# ✅ PATTERNS.md — Kotlin Multiplatform Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Shared ViewModel in commonMain using StateFlow — platform UIs observe it
- Repository pattern in commonMain — platform provides actual data sources
- Koin for DI in shared module — initialized per platform in platformModule
- All network models in shared/domain/ — platform-specific models if needed

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `ktor-client` | [reason it was chosen] |
| `kotlinx.serialization` | [reason it was chosen] |
| `kotlinx.coroutines` | [reason it was chosen] |
| `sqldelight` | [reason it was chosen] |
| `koin` | [reason it was chosen] |

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

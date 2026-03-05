# ✅ PATTERNS.md — .NET MAUI Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- One ViewModel per Page — never share ViewModels across pages
- Navigation via Shell routes with parameters — typed route params
- All HTTP calls via Refit typed interfaces in Services/
- DI registered in MauiProgram.cs — never new() a service manually

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `CommunityToolkit.Mvvm` | [reason it was chosen] |
| `CommunityToolkit.Maui` | [reason it was chosen] |
| `sqlite-net-pcl` | [reason it was chosen] |
| `Refit` | [reason it was chosen] |

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

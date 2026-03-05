# ✅ PATTERNS.md — Spring Boot Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- MapStruct for entity↔DTO mapping — never manual mapping in services
- Spring Security method-level security with @PreAuthorize for fine-grained access
- Flyway for DB migrations — never manual schema changes
- ResponseEntity<T> return types on all controllers for explicit status codes

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `spring-boot-starter-web` | [reason it was chosen] |
| `spring-data-jpa` | [reason it was chosen] |
| `spring-security` | [reason it was chosen] |
| `lombok` | [reason it was chosen] |
| `mapstruct` | [reason it was chosen] |

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

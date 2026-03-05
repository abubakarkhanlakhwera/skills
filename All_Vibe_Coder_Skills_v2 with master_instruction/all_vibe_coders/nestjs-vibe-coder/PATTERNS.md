# ✅ PATTERNS.md — NestJS Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- Feature modules: ItemsModule, UsersModule — each with controller, service, repository
- Global ValidationPipe with whitelist: true, forbidNonWhitelisted: true
- Custom exception filter extends BaseExceptionFilter for consistent error shape
- ConfigModule.forRoot() with validation schema at app startup

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `@nestjs/core` | [reason it was chosen] |
| `@nestjs/jwt` | [reason it was chosen] |
| `class-validator` | [reason it was chosen] |
| `typeorm` | [reason it was chosen] |
| `prisma` | [reason it was chosen] |

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

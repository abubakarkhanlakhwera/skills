## NestJS Development Standards
> Sourced from: `.github/skills/nestjs-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing modules, providers, and decorators first
- Module boundaries matter — each feature is a self-contained NestJS module
- Fix roots, not symptoms — trace DI errors, pipe validation failures, guard misconfigurations to their cause
- Match the stack — NestJS 10+, TypeScript, class-validator only
- One thing at a time — no refactoring AND adding modules in one response

### Coding Style
- TypeScript strictly — no `any`, typed DTOs for every request/response
- `class-validator` + `class-transformer` for all DTO validation via `ValidationPipe`
- Layer separation: `Controller` → `Service` → `Repository` — no logic in controllers
- `@Module()` to encapsulate each feature — never add providers to `AppModule` directly
- `@Injectable()` services for all business logic — never instantiate services manually
- Guards for auth, Interceptors for logging/transforms, Pipes for validation
- `ConfigModule` + `ConfigService` for all env access — never raw `process.env`
- Built-in `HttpException` subclasses — never throw raw `Error` in controllers
- Remove unused providers, dead controllers, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch DI errors — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No business logic in controllers
- ❌ No raw process.env outside ConfigService
- ❌ No skipping DTO validation on incoming requests
- ❌ No refactoring working modules without permission
- ❌ Never end a session without a next step

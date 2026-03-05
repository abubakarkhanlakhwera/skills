## Spring Boot Development Standards
> Sourced from: `.github/skills/spring-boot-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing entities, repositories, and services first
- Spring way first — use Spring's built-in mechanisms before adding complexity
- Fix roots, not symptoms — trace bean wiring failures, transaction rollbacks, JPA issues to their cause
- Match the stack — Spring Boot 3.x, Java 21+/Kotlin, Spring Data JPA only
- One thing at a time — no refactoring AND adding endpoints in one response

### Coding Style
- Constructor injection everywhere — never field injection with `@Autowired`
- Strict layers: `@RestController` → `@Service` → `@Repository` — no business logic in controllers
- DTOs for all request/response bodies — never expose JPA entities directly via REST
- `@Transactional` only in service layer — never in controllers or repositories
- Spring Data JPA derived queries or `@Query` — never manual EntityManager unless absolutely needed
- `@ControllerAdvice` + `@ExceptionHandler` for centralized error handling
- `application.yml` + `@ConfigurationProperties` for typed config binding
- `@Validated` + Bean Validation annotations on DTOs — never manual validation
- Remove unused beans, dead endpoints, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never swallow exceptions — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ Never use field injection (@Autowired on fields)
- ❌ Never expose JPA entities directly in REST responses
- ❌ Never put @Transactional on controller methods
- ❌ No refactoring working services without permission
- ❌ Never end a session without a next step

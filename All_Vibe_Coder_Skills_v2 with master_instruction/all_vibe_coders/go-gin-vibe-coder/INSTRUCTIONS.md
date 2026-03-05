## Go + Gin Development Standards
> Sourced from: `.github/skills/go-gin-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing handlers, middleware, and structs first
- Idiomatic Go first — simple, explicit, and boring is good; cleverness is a red flag
- Fix roots, not symptoms — trace nil pointer panics, context cancellations, race conditions to their cause
- Match the stack — Go 1.22+, Gin only
- One thing at a time — no refactoring AND adding routes in one response

### Coding Style
- Standard Go project layout: `cmd/`, `internal/`, `pkg/`
- `internal/` for all app-specific code — expose via `pkg/` only when necessary
- Always handle errors explicitly — never ignore returned errors with `_`
- `context.Context` as first argument of every function that does I/O
- Bind and validate with `c.ShouldBindJSON()` + struct tags — never manual parsing
- Consistent JSON error: `{ "error": "message" }` with correct HTTP status
- `gin.RouterGroup` for versioning and route grouping — never all routes in `main.go`
- Dependency injection through structs — never global variables for services or DB
- `defer` for cleanup (closing rows, files)
- Remove dead handlers, commented code immediately (Go won't compile unused imports)

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch panic symptoms — fix nil/error handling at root

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ Never ignore returned errors
- ❌ No global variables for services or DB connections
- ❌ Never panic in handler code — return errors to the client
- ❌ No refactoring working handlers without permission
- ❌ Never end a session without a next step

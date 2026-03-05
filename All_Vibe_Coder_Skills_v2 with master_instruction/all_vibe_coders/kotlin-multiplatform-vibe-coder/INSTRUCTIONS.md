## Kotlin Multiplatform Development Standards
> Sourced from: `.github/skills/kotlin-multiplatform-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing shared modules, expect/actual pairs, and platform code first
- Shared first — put as much logic as possible in `commonMain`
- Fix roots, not symptoms — trace linker errors, expect/actual mismatches, Gradle failures to their cause
- Match the stack — Kotlin 2.x, KMP, Compose Multiplatform only
- One thing at a time — no refactoring AND adding shared modules in one response

### Coding Style
- Idiomatic Kotlin — data classes, sealed classes, extension functions, coroutines
- All shared business logic in `commonMain` — never duplicate across platform source sets
- `expect`/`actual` only for truly platform-specific APIs (crypto, file system, datetime)
- `kotlinx.coroutines` for async in shared code — never platform threads directly
- `kotlinx.serialization` for serialization — never Gson or Moshi in shared modules
- `Ktor` for shared networking — never Retrofit or URLSession in `commonMain`
- `StateFlow`/`SharedFlow` for reactive state — never LiveData in shared code
- Gradle version catalogs (`libs.versions.toml`) as single source of truth for all deps
- Remove unused expect/actual declarations or dead source sets immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch Gradle symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No platform-specific code in commonMain
- ❌ No LiveData or Gson in shared modules
- ❌ No refactoring working expect/actual pairs without permission
- ❌ No duplicated logic across platform source sets
- ❌ Never end a session without a next step

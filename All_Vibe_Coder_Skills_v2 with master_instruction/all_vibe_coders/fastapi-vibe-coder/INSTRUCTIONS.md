## FastAPI Development Standards
> Sourced from: `.github/skills/fastapi-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing routes, models, and dependencies first
- Less is more — avoid unnecessary abstractions around simple routes
- Fix roots, not symptoms — trace 422s, 500s, and validation errors to their cause
- Match the stack — FastAPI, Pydantic v2, Python 3.11+ only
- One thing at a time — no refactoring AND adding endpoints in one response

### Coding Style
- Type hints everywhere — no untyped functions or parameters
- PascalCase for Pydantic models, snake_case for functions and variables
- Use Pydantic v2 models for all request/response schemas — never raw dicts
- Use `Depends()` for DB sessions, auth, and shared logic
- Use `APIRouter` with prefix and tags — never dump routes into main.py
- `async def` for I/O-bound routes, `def` for CPU-bound only
- Always set `response_model=` on route decorators
- Never expose internal DB models directly in responses
- Remove unused imports, dead routes, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch HTTP error symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No large route files generated without request
- ❌ No refactoring working routes without permission
- ❌ No new packages unless asked
- ❌ Never expose raw SQLAlchemy models in responses
- ❌ Never end a session without a next step

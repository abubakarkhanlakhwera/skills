## Node.js Backend Development Standards
> Sourced from: `.github/skills/nodejs-backend-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing routes, middleware, and services first
- Less is more — avoid over-engineering simple Express routes
- Fix roots, not symptoms — trace unhandled rejections, async errors to their cause
- Match the stack — Node.js 20+, Express/Fastify, ESM only
- One thing at a time — no refactoring AND adding features in one response

### Coding Style
- ESM modules (`import`/`export`) — never `require()` unless project already uses CJS
- `async/await` everywhere — no callbacks or `.then()` chains
- Wrap async route handlers in try/catch or async error wrapper
- camelCase for variables/functions, PascalCase for classes, UPPER_SNAKE_CASE for env constants
- Separate concerns: `routes/` → `controllers/` → `services/` — no logic in route handlers
- Validate all incoming requests with Zod or Joi before touching any service
- All env via a single `config.js` — no scattered `process.env.X`
- Consistent JSON error shape: `{ error: { code, message } }`
- Remove unused imports, dead routes, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch error symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No large route files generated without request
- ❌ No refactoring working middleware or routes without permission
- ❌ No new packages unless asked
- ❌ No business logic directly in route handlers
- ❌ Never end a session without a next step

## Tauri Development Standards
> Sourced from: `.github/skills/tauri-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing commands, state, and frontend bindings first
- Less is more — avoid unnecessary IPC complexity beyond what one Tauri command needs
- Fix roots, not symptoms — trace IPC errors, permission panics, build failures to their cause
- Match the stack — Tauri v2, Rust, chosen frontend (React/Vue/Svelte/Vanilla) only
- One thing at a time — no refactoring AND adding commands in one response

### Coding Style
- Idiomatic Rust in `src-tauri/` — ownership, borrowing, error handling with `Result<T, E>`
- Never use `.unwrap()` or `.expect()` in command handlers — always propagate errors
- Use `#[tauri::command]` for all Rust↔frontend communication
- Use `AppHandle` and `State<T>` for dependency injection into commands
- Keep `main.rs` minimal — move command implementations to modules
- Frontend: use `@tauri-apps/api` invoke wrappers, never raw `window.__TAURI__`
- Use Tauri's permission system (`capabilities/`) — never `all: true` in production
- Use Tauri events for real-time updates — don't poll
- Remove unused plugins, permissions, dead command handlers immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch IPC symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ Never use `.unwrap()` in Tauri command handlers
- ❌ No refactoring working Rust commands without permission
- ❌ No plugins added without request
- ❌ Never use `all: true` in capability configs
- ❌ Never end a session without a next step

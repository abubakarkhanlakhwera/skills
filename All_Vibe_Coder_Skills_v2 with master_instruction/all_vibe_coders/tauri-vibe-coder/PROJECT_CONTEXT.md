# 📋 PROJECT_CONTEXT.md — Tauri
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : Rust + TypeScript
Framework     : Tauri v2 + Vite
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : SQLite via tauri-plugin-sql or serde_json file storage
Auth          : Local keychain via tauri-plugin-keychain or JWT stored in secure store
Deploy Target : GitHub Actions + tauri-action for Windows/macOS/Linux
Key Libraries : tauri, serde, tokio, tauri-plugin-store, tauri-plugin-http
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
tauri               : 2.x
rust                : stable
vite                : 5.x
```

## Current Sprint / Focus
```yaml
Current Task  : [what you are building right now — be specific]
Acceptance    : [what "done" looks like for this task]
Blocked By    : [anything blocking progress, or "nothing"]
```

## Known Issues
```yaml
# List active bugs, tech debt, or gotchas the AI should know about
- "[e.g., login flow has a race condition when token refreshes mid-request]"
- "[e.g., DB migrations pending — do not run migrate in this session]"
```

## Architecture Notes
```yaml
# Anything non-obvious about this project's architecture
- "[e.g., we use event sourcing for the orders domain]"
- "[e.g., frontend and backend are in a monorepo under /apps]"
```

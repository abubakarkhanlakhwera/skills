# 📋 PROJECT_CONTEXT.md — Electron
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : TypeScript
Framework     : Electron 30+ + Vite
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : SQLite via better-sqlite3 (main process only)
Auth          : Local session via keytar + JWT
Deploy Target : electron-builder for Windows/macOS/Linux + auto-update via electron-updater
Key Libraries : electron, better-sqlite3, keytar, electron-builder, electron-updater
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
electron            : 30.x
node                : 20.x
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

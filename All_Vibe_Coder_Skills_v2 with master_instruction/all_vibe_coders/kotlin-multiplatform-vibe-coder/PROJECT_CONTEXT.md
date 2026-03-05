# 📋 PROJECT_CONTEXT.md — Kotlin Multiplatform
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : Kotlin 2.x
Framework     : KMP + Compose Multiplatform
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : SQLDelight for shared DB, platform DB for native-only
Auth          : Shared JWT logic in commonMain, platform keychain via expect/actual
Deploy Target : Android: Play Store, iOS: App Store, Desktop: GitHub releases
Key Libraries : ktor-client, kotlinx.serialization, kotlinx.coroutines, sqldelight, koin
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
kotlin              : 2.0.x
kmp                 : 0.9.x
ktor                : 2.3.x
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

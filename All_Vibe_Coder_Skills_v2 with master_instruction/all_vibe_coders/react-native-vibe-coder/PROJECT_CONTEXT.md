# 📋 PROJECT_CONTEXT.md — React Native
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : TypeScript
Framework     : React Native 0.73+ + Expo SDK
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : SQLite via expo-sqlite or remote via React Query
Auth          : expo-secure-store + JWT or Expo AuthSession
Deploy Target : EAS Build + EAS Submit for App Store / Play Store
Key Libraries : expo, react-navigation, react-query, zustand, expo-secure-store
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
expo                : 51.x
react-native        : 0.74.x
react-navigation    : 6.x
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

# 📋 PROJECT_CONTEXT.md — .NET MAUI
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : C# 12 / .NET 8+
Framework     : .NET MAUI + CommunityToolkit.Mvvm
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : SQLite via sqlite-net-pcl or cloud via HttpClient
Auth          : MSAL (Microsoft Authentication Library) or custom JWT
Deploy Target : iOS App Store / Google Play / Microsoft Store / macOS
Key Libraries : CommunityToolkit.Mvvm, CommunityToolkit.Maui, sqlite-net-pcl, Refit
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
dotnet              : 8.x
maui                : 8.x
communitytoolkit    : 8.x
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

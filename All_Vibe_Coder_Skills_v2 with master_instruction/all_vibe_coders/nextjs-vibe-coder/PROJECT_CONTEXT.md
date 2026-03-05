# 📋 PROJECT_CONTEXT.md — Next.js
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : TypeScript
Framework     : Next.js 14+ App Router
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : PostgreSQL via Prisma ORM
Auth          : NextAuth.js v5 (Auth.js)
Deploy Target : Vercel / Docker + nginx
Key Libraries : next, prisma, next-auth, tailwindcss, zod
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
nextjs              : 14.x
react               : 18.x
typescript          : 5.x
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

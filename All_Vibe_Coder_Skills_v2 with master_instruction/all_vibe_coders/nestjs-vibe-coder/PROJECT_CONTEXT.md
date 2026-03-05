# 📋 PROJECT_CONTEXT.md — NestJS
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : TypeScript
Framework     : NestJS 10+
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : PostgreSQL via TypeORM or Prisma
Auth          : JWT via @nestjs/jwt + Passport
Deploy Target : Docker + PM2 / Railway / Fly.io
Key Libraries : @nestjs/core, @nestjs/jwt, class-validator, typeorm, prisma
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
nestjs              : 10.x
typescript          : 5.x
node                : 20.x
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

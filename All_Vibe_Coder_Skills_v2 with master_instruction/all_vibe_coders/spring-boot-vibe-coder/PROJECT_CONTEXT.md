# 📋 PROJECT_CONTEXT.md — Spring Boot
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : Java 21 / Kotlin
Framework     : Spring Boot 3.x
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : PostgreSQL via Spring Data JPA + Hibernate
Auth          : Spring Security 6 + JWT or OAuth2 Resource Server
Deploy Target : Docker + Spring Boot layered JAR / Railway / Fly.io
Key Libraries : spring-boot-starter-web, spring-data-jpa, spring-security, lombok, mapstruct
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
spring-boot         : 3.3.x
java                : 21
spring-security     : 6.x
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

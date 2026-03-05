# 📋 PROJECT_CONTEXT.md — Django REST
> Fill this in once per project. The AI reads this at session start.
> Update whenever your stack, task, or known issues change.

## Project Identity
```yaml
Project Name  : [your project name]
Description   : [one sentence — what this project does]
Language      : Python 3.12+
Framework     : Django 5.x + DRF
Environment   : [development / staging / production]
```

## Stack Details
```yaml
DB / Store    : PostgreSQL via Django ORM
Auth          : JWT via djangorestframework-simplejwt
Deploy Target : Docker + gunicorn + nginx / Railway
Key Libraries : djangorestframework, django-filter, simplejwt, celery, django-cors-headers
```

## Pinned Versions (see also STACK_VERSIONS.md)
```yaml
django              : 5.0.x
djangorestframework : 3.15.x
python              : 3.12
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

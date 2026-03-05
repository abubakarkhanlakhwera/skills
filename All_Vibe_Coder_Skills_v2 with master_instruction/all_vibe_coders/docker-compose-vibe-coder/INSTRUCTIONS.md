## Docker + Compose Development Standards
> Sourced from: `.github/skills/docker-compose-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing Dockerfiles, Compose files, and volumes first
- Small and secure — minimize image size and attack surface
- Fix roots, not symptoms — trace layer cache misses, networking failures, volume permission issues to their cause
- Match the stack — Docker 25+, Compose v2 only
- One thing at a time — no refactoring AND adding services in one response

### Coding Style
- Multi-stage builds for all compiled languages — never ship build tools in the final image
- Order Dockerfile layers least → most frequently changing — `COPY requirements.txt` before `COPY . .`
- Specific base image tags (e.g., `node:20.14-alpine`) — never `latest`
- Run as non-root user — create and switch to an app user in every production Dockerfile
- `.dockerignore` to exclude `.git`, `node_modules`, `__pycache__`, build artifacts
- Named volumes for persistent data in Compose — never host bind-mounts in production
- `healthcheck` on every service that others `depends_on`
- `depends_on: condition: service_healthy` — never bare `depends_on`
- Never hardcode secrets in Dockerfiles or Compose — use env vars or Docker secrets
- Remove unused build stages, dead RUN commands, commented layers immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch container startup errors — fix root image or config issue

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ Never use `latest` tag for base images
- ❌ Never run as root in production images
- ❌ Never hardcode secrets in Dockerfiles or Compose files
- ❌ Never use bare `depends_on` without healthcheck conditions
- ❌ Never end a session without a next step

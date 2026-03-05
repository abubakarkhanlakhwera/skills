# 🧩 SNIPPETS.md — Docker + Compose Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Multi-stage Dockerfile
```bash
FROM node:20.14-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:20.14-alpine AS runtime
RUN addgroup -S app && adduser -S appuser -G app
WORKDIR /app
COPY --from=builder --chown=appuser:app /app/node_modules ./node_modules
COPY --chown=appuser:app . .
USER appuser
EXPOSE 3000
CMD ["node", "src/server.js"]
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(docker-+-compose): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

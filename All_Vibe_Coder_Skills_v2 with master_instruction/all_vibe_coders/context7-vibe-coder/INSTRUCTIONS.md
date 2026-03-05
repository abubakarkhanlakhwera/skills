## Context7 Standards
> Sourced from: `.github/skills/context7-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must resolve library docs before writing code.

### Core Mindset
- Resolve before writing — always fetch docs for any library before generating code that uses it
- Version-accurate only — never use training memory for library APIs; always confirm via Context7
- One library at a time — resolve each dependency separately for clean, focused doc context
- Trust the source — if Context7 docs conflict with your memory, the docs win

### How to Use (Every Session)
- Step 1 — Resolve: `use context7 → resolve-library-id: "[library name]"`
- Step 2 — Fetch: `get-library-docs: "[resolved-id]" topic: "[specific feature]" tokens: 5000`
- Step 3 — Write code using only the fetched docs

### Setup (One-Time)
```json
{
  "mcpServers": {
    "context7": {
      "command": "npx",
      "args": ["-y", "@upstash/context7-mcp@latest"]
    }
  }
}
```
Add to: VS Code / Cursor / Windsurf MCP settings, or `claude_desktop_config.json`

### Libraries That Benefit Most
- AI/LLM: LangChain, LangGraph, OpenAI SDK, Anthropic SDK
- Frontend: Next.js App Router, SvelteKit, Nuxt 3, Tailwind CSS v4
- Backend: FastAPI, NestJS, Prisma, Drizzle ORM, tRPC
- Mobile: Expo SDK, React Navigation, Tauri v2
- Infra: Terraform providers, AWS CDK
- Data: dbt, Polars, SQLAlchemy 2.x

### Hard Rules (Never Break)
- ❌ Never generate library-specific code from memory alone without verifying via Context7
- ❌ Never skip Context7 for frequently-changing libraries
- ❌ Never use outdated API signatures even if they "look right"
- ❌ Never fetch docs without a focused `topic:` — broad fetches waste context window
- ❌ Never end a session without a next step

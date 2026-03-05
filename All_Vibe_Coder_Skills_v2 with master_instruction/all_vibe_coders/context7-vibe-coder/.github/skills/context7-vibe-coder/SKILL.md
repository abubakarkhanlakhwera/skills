# 🤖 Copilot Coding Assistant — Context7 Edition

> This file activates Context7 MCP for all AI coding sessions.
> It is always active. Every suggestion must use Context7 before writing code that touches a library.

## 👤 What Context7 Does
Context7 is an MCP server that fetches **live, version-accurate library documentation** directly into
the AI context window. It eliminates hallucinated APIs, outdated method signatures, and wrong import
paths — the most common source of AI-generated bugs.

Instead of relying on training data (which may be months or years stale), the AI resolves docs at
query time. This means suggestions always match the exact version you are running.

## 🔧 Setup (One-Time)

### VS Code / Cursor / Windsurf — add to MCP settings:
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

### Claude Desktop — add to `claude_desktop_config.json`:
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

> **Requires:** Node.js 18+. No API key needed. Docs are fetched live from official sources.

## 🧠 Core Mindset (Always Active)
- **Resolve before writing** — always fetch docs for any library before generating code that uses it
- **Version-accurate only** — never use training memory for library APIs; always confirm via Context7
- **One library at a time** — resolve each dependency separately for clean, focused doc context
- **Trust the source** — if Context7 docs conflict with your memory, the docs win

## 📋 How to Use Context7 in Every Session

### Step 1 — Resolve the library ID
```
use context7

resolve-library-id: "fastapi"
```

### Step 2 — Fetch relevant docs
```
get-library-docs: "/tiangolo/fastapi" topic: "dependency injection" tokens: 5000
```

### Step 3 — Write code using only the fetched docs
The AI will now generate code that matches the exact API in the docs — not guessed from training data.

## ✍️ Context7 Usage Rules
- Always call `resolve-library-id` first when starting work on an unfamiliar or version-sensitive library
- Use `get-library-docs` with a focused `topic:` to avoid dumping irrelevant docs into context
- Set `tokens:` between 3000–8000 depending on complexity — don't over-fetch
- Prefer official package names when resolving (e.g., `"langchain"`, `"nextjs"`, `"tailwindcss"`)
- Re-fetch docs if you switch to a different major version mid-session
- Never assume a method exists — verify it in the fetched docs before using it

## 🐛 Debugging With Context7
When getting an error related to a library method, import, or API:
```
1. resolve-library-id: "[the library]"
2. get-library-docs: "[id]" topic: "[the failing method or concept]"
3. Compare fetched docs against the failing code
4. Fix based on actual documented API — not guesses
```

## 🗂️ Example Prompts That Trigger Context7

| Situation | Prompt to use |
|---|---|
| Starting a new library | `use context7 and show me how to set up [library]` |
| Unsure about an API | `check context7 for the correct signature of [method]` |
| Getting a type/import error | `use context7 to find the correct import for [thing]` |
| Version mismatch | `fetch context7 docs for [library] v[X] on [topic]` |

## 🚫 Hard Rules — Never Break These
- ❌ Never generate library-specific code from memory alone without verifying via Context7
- ❌ Never skip Context7 for libraries that change frequently (LangChain, Next.js, Tauri, etc.)
- ❌ Never use outdated API signatures even if they "look right" from training data
- ❌ Never fetch docs without a focused `topic:` — broad fetches waste context window

## 📋 Session Checklist
- [ ] Is Context7 MCP running in this editor?
- [ ] Did I resolve the library ID before writing code?
- [ ] Did I fetch docs with a focused topic?
- [ ] Is the code I'm generating consistent with the fetched docs?
- [ ] End with ➡️ Next step

## 🗣️ Communication Style
- When using Context7, briefly say what you're resolving and why
- After fetching docs, confirm the API version and relevant method before writing code
- If docs don't cover the exact use case, say so — don't fill gaps with guesses
- End every response: ➡️ Next step: [one clear action]

## 🧩 Libraries That Benefit Most From Context7
These change frequently — always resolve before use:
- **AI/LLM**: LangChain, LangGraph, OpenAI SDK, Anthropic SDK, LlamaIndex
- **Frontend**: Next.js App Router, SvelteKit, Nuxt 3, Tailwind CSS v4
- **Backend**: FastAPI, NestJS, Prisma, Drizzle ORM, tRPC
- **Mobile**: Expo SDK, React Navigation, Tauri v2
- **Infra**: Terraform providers, Pulumi, AWS CDK
- **Data**: dbt, Polars, SQLAlchemy 2.x

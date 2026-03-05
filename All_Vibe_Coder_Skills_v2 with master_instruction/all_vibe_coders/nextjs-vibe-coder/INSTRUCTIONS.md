## Next.js Development Standards
> Sourced from: `.github/skills/nextjs-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing pages, layouts, and server/client boundaries first
- Server first — default to React Server Components; add `"use client"` only when required
- Fix roots, not symptoms — trace hydration errors, fetch caching bugs, build failures to their cause
- Match the stack — Next.js 14+, App Router, TypeScript only
- One thing at a time — no refactoring AND adding routes in one response

### Coding Style
- TypeScript everywhere — no `any`, typed `params` and `searchParams` in pages
- Default to React Server Components — `"use client"` only for interactivity, hooks, or browser APIs
- Use Server Actions for mutations — no API routes just to POST from client components
- Use `fetch()` with Next.js cache options — never `axios` in server code
- Co-locate files: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx` per route segment
- `next/image` for all images, `next/link` for all navigation — never raw `<img>` or `<a>`
- `generateMetadata()` for SEO — never hardcode `<head>` tags
- `lib/` for utilities, `components/` for reusable UI — no logic in page files
- Remove unused routes, dead components, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch hydration symptoms — fix the server/client boundary

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No `"use client"` without a clear reason
- ❌ No raw `<img>` or `<a>` tags
- ❌ No API routes for mutations that can use Server Actions
- ❌ No refactoring working layouts without permission
- ❌ Never end a session without a next step

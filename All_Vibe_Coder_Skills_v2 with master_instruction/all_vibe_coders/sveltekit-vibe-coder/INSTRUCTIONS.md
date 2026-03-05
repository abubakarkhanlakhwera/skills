## SvelteKit Development Standards
> Sourced from: `.github/skills/sveltekit-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing routes, load functions, and stores first
- Less is more — Svelte's reactivity is built-in; no unnecessary abstractions
- Fix roots, not symptoms — trace SSR errors, form action failures, load function bugs to their cause
- Match the stack — SvelteKit 2.x, Svelte 5, TypeScript only
- One thing at a time — no refactoring AND adding routes in one response

### Coding Style
- TypeScript with `lang="ts"` in all `.svelte` files
- `+page.server.ts` load functions for data fetching — never fetch in `onMount` for SSR data
- Form actions (`+page.server.ts` actions) for mutations — not client-side fetch POST calls
- Svelte 5 runes (`$state`, `$derived`, `$effect`) — never mix old and new reactivity
- `$lib` alias for all shared imports — never relative `../../` paths across feature folders
- `$lib/components/` for components, `$lib/utils/` for utilities, `$lib/stores/` for stores
- Use `error()` and `redirect()` helpers in load functions — never throw raw errors
- Use `enhance` on forms for progressive enhancement
- Remove unused stores, dead routes, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch SSR symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No fetching SSR data in onMount
- ❌ No relative imports across feature folders
- ❌ No skipping `enhance` directive on form actions
- ❌ No refactoring working load functions without permission
- ❌ Never end a session without a next step

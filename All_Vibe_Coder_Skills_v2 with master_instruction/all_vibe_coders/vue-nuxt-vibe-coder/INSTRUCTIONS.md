## Vue + Nuxt Development Standards
> Sourced from: `.github/skills/vue-nuxt-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing pages, composables, and server routes first
- Auto-imports first — leverage Nuxt's auto-imports; never manually import what Nuxt provides
- Fix roots, not symptoms — trace SSR hydration errors, composable misuse, Nitro issues to their cause
- Match the stack — Nuxt 3, Vue 3 Composition API, TypeScript only
- One thing at a time — no refactoring AND adding pages in one response

### Coding Style
- TypeScript with `<script setup lang="ts">` in all `.vue` files — never Options API
- `<script setup>` only — never `defineComponent()` boilerplate
- `useFetch()` and `useAsyncData()` for data fetching — never raw `fetch()` in `onMounted`
- Composables in `composables/` always prefixed with `use`
- Nuxt server routes in `server/api/` — never a separate Express server
- `useState()` for SSR-safe shared state — never raw `ref()` for global state
- `definePageMeta()` for route meta — never configure in router directly
- Pinia for complex client state — never Vuex
- Remove unused composables, dead pages, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch hydration symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No Options API or defineComponent boilerplate
- ❌ No fetching data in onMounted for SSR pages
- ❌ No raw ref() for global/shared state
- ❌ No refactoring working composables without permission
- ❌ Never end a session without a next step

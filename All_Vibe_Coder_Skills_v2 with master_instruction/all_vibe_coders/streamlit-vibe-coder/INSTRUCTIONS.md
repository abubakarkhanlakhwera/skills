## Streamlit Development Standards
> Sourced from: `.github/skills/streamlit-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing pages, session state, and cached functions first
- Execution model first — Streamlit reruns top-to-bottom on every interaction
- Fix roots, not symptoms — trace stale state, re-render loops, caching misses to their cause
- Match the stack — Streamlit 1.35+, Python 3.11+ only
- One thing at a time — no refactoring AND adding widgets in one response

### Coding Style
- `@st.cache_data` for expensive computations — never recompute on every rerun
- `@st.cache_resource` for resource-heavy objects (DB connections, ML models)
- `st.session_state` for all cross-rerun state — never module-level mutable variables
- Multipage apps (`pages/` folder) for multi-screen apps — never one massive single file
- Data loading/transformation in separate `@st.cache_data` functions — not inline in render flow
- `st.columns()`, `st.tabs()`, `st.expander()` for layout
- `st.form()` + `st.form_submit_button()` to batch inputs and avoid reruns on every keystroke
- Remove unused `st.write()` debug calls, dead widgets, commented experiments immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch rerun symptoms — fix state management at root

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No module-level mutable state
- ❌ Never mutate a @st.cache_data return value in place
- ❌ No heavy data computation inline in the render flow
- ❌ No refactoring working cached functions without permission
- ❌ Never end a session without a next step

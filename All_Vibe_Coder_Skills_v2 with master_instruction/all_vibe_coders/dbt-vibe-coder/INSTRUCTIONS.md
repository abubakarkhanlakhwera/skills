## dbt Development Standards
> Sourced from: `.github/skills/dbt-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing models, sources, and schema.yml first
- Modularity first — staging → intermediate → mart; never skip layers
- Fix roots, not symptoms — trace failing tests, ref errors, bad grain definitions to their cause
- Match the stack — dbt Core or dbt Cloud, target warehouse only
- One thing at a time — no refactoring AND adding models in one response

### Coding Style
- Strict layer pattern: `stg_` → `int_` → `fct_`/`dim_`
- `{{ ref() }}` for all model-to-model references — never hardcode schema.table in SQL
- `{{ source() }}` for all raw source references — never hardcode raw table paths
- `not_null` and `unique` tests on every primary key in `schema.yml`
- `dbt_utils` macros (e.g., `generate_surrogate_key`) over rolling your own
- Define all sources in `sources.yml` with freshness checks
- Incremental models only when table size justifies it — document why
- Descriptions on every model and column in `schema.yml` — undocumented = unfinished
- Remove unused CTEs, dead models, commented-out SQL immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch test failures — fix the model logic at root

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ Never hardcode raw schema/table names — always ref() or source()
- ❌ No skipping primary key tests on final models
- ❌ No mart-level logic in staging models
- ❌ No refactoring working models without permission
- ❌ Never end a session without a next step

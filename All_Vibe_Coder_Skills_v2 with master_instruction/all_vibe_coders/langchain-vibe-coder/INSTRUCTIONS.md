## LangChain Development Standards
> Sourced from: `.github/skills/langchain-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing chains, prompts, and retriever setup first
- LCEL first — use LangChain Expression Language pipes (`|`) for all chain composition
- Fix roots, not symptoms — trace context window overflows, hallucinations, retrieval misses to their cause
- Match the stack — LangChain 0.2+, Python, LangSmith only
- One thing at a time — no refactoring AND adding chain steps in one response

### Coding Style
- LCEL (`prompt | llm | parser`) for all chain composition — never legacy `LLMChain`
- Pydantic models for structured output — never rely on raw string parsing
- `ChatPromptTemplate.from_messages()` — never f-string prompt construction
- `RunnableParallel` and `RunnablePassthrough` for branching and context passing
- Prompt templates in separate files or constants — never inline long prompts in chain code
- LangSmith tracing in development — wrap with `with_config({"run_name": "..."})`
- `RecursiveCharacterTextSplitter` with intentional `chunk_size` and `chunk_overlap`
- `async` (`ainvoke`, `astream`) for production chains — never sync in web servers
- Remove unused runnables, dead retrievers, commented prompt experiments immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch hallucination symptoms — fix retrieval or prompt at root

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory — LangChain changes frequently, always verify

### Hard Rules (Never Break)
- ❌ Never use legacy LLMChain or SequentialChain
- ❌ Never build prompts with raw f-strings
- ❌ Never use sync chain calls in async web servers
- ❌ No refactoring working chains without permission
- ❌ Never end a session without a next step

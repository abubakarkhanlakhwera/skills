# 🚀 ONBOARDING.md — LangChain New Developer Guide
> Read this on your first day working in this project.
> Generated from the active skill rules — reflects actual project standards.

## What This Project Is
[1–2 sentences describing what this project does and who it's for]

## Tech Stack
| Layer | Technology | Version | Why We Chose It |
|-------|-----------|---------|----------------|
| Language | Python 3.11+ | 0.2.x | [reason] |
| Framework | LangChain 0.2+ / LangGraph | — | [reason] |
| Database | pgvector or Chroma for vector store | — | [reason] |
| Auth | API keys via environment only — never hardcoded | — | [reason] |
| Deploy | FastAPI wrapper + Docker / LangServe | — | [reason] |

## First-Time Setup
```bash
# 1. Clone the repo
git clone [repo-url]
cd [project-name]

# 2. Install dependencies
[install command for this stack]

# 3. Copy environment config
cp .env.example .env
# Edit .env with your local values

# 4. Set up database
[db setup command]

# 5. Run the project
[run command]
```

## How We Work

### Branching Strategy
- `main` — production-ready code only
- `develop` — integration branch
- `feature/TICKET-description` — feature branches off develop
- PRs require 1 review and passing CI before merge

### Code Standards
See SKILL.md and INSTRUCTIONS.md for the full AI-enforced standards.
The key rules:
- LCEL for all chains: prompt | llm | parser — never legacy LLMChain
- LangSmith tracing enabled in development via LANGCHAIN_TRACING_V2=true
- Prompts in prompts/ directory as PromptTemplate files — never inline

### Things We Never Do
- Legacy LLMChain, SequentialChain — always LCEL
- f-string prompt construction — always ChatPromptTemplate.from_messages()
- Synchronous chain calls in FastAPI handlers — always ainvoke/astream

## Key Files to Read First
1. `INSTRUCTIONS.md` — condensed coding standards
2. `PATTERNS.md` — approved patterns for this project
3. `ANTI_PATTERNS.md` — what not to do and why
4. `DECISIONS.md` — why key decisions were made
5. `PROJECT_CONTEXT.md` — current project state

## Getting Help
- Check `SESSION_LOG.md` for recent context
- Check `DECISIONS.md` before asking "why do we do X this way?"
- Ask in [team Slack channel / Discord / email]

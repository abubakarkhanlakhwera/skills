# ✅ PATTERNS.md — LangChain Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- LCEL for all chains: prompt | llm | parser — never legacy LLMChain
- LangSmith tracing enabled in development via LANGCHAIN_TRACING_V2=true
- Prompts in prompts/ directory as PromptTemplate files — never inline
- Retriever abstraction behind interface — swap vector stores without changing chain

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `langchain` | [reason it was chosen] |
| `langchain-openai` | [reason it was chosen] |
| `langgraph` | [reason it was chosen] |
| `langsmith` | [reason it was chosen] |
| `chromadb` | [reason it was chosen] |

## Approved Naming Conventions
- [e.g., Files: kebab-case | Classes: PascalCase | Functions: camelCase]
- [e.g., Feature branches: feature/TICKET-description]
- [e.g., Commit format: type(scope): description]

## Approved Testing Patterns
- [e.g., Unit tests co-located with source in __tests__/ subfolder]
- [e.g., Integration tests in /tests/integration/]
- [e.g., Test naming: describe('ClassName') → it('should do X when Y')]

## Recently Added Patterns
| Date | Pattern | Reason |
|------|---------|--------|
| [YYYY-MM-DD] | [pattern] | [why it was added] |

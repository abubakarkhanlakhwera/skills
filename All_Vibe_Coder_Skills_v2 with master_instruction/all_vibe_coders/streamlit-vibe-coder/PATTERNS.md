# ✅ PATTERNS.md — Streamlit Approved Patterns
> These patterns have been reviewed and approved for this project.
> The AI should always prefer these over alternatives.
> Add new patterns here after team review.

## Approved Architecture Patterns
- One Python file per page in pages/ — auto-registered by Streamlit
- Data loading functions in src/data/ decorated with @st.cache_data
- DB engine in src/db.py decorated with @st.cache_resource
- All config in .streamlit/config.toml and secrets.toml — never hardcoded

## Approved File Structure
```
[Fill in your project's actual folder layout here]
```

## Approved Libraries & Why
| Library | Why Approved |
|---------|-------------|
| `streamlit` | [reason it was chosen] |
| `pandas` | [reason it was chosen] |
| `plotly` | [reason it was chosen] |
| `sqlalchemy` | [reason it was chosen] |
| `streamlit-authenticator` | [reason it was chosen] |

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

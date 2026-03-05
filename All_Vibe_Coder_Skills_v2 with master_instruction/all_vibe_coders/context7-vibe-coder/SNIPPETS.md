# 🧩 SNIPPETS.md — Context7 Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Full resolve + fetch workflow
```bash
// Step 1 — resolve
use context7
resolve-library-id: "fastapi"
// → returns: /tiangolo/fastapi

// Step 2 — fetch focused docs
get-library-docs: "/tiangolo/fastapi" topic: "dependency injection" tokens: 5000

// Step 3 — write code based only on fetched docs
// Never mix training memory with fetched docs
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(context7): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

# 🧩 SNIPPETS.md — dbt Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Incremental model
```sql
{{ config(materialized='incremental', unique_key='order_id') }}

select * from {{ ref('stg_orders') }}
{% if is_incremental() %}
  where created_at > (select max(created_at) from {{ this }})
{% endif %}
```

### Surrogate key
```sql
select
    {{ dbt_utils.generate_surrogate_key(['order_id', 'line_item_id']) }} as line_item_key,
    order_id,
    line_item_id
from {{ ref('stg_order_lines') }}
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(dbt): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

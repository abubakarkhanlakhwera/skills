# 🧩 SNIPPETS.md — Tauri Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Typed command
```rust
#[tauri::command]
pub async fn get_item(id: u32, state: tauri::State<'_, AppState>) -> Result<Item, String> {
    let db = state.db.lock().map_err(|e| e.to_string())?;
    db.get_item(id).map_err(|e| e.to_string())
}
```

### Frontend typed wrapper
```rust
// src/lib/api.ts
import { invoke } from '@tauri-apps/api/core';
import type { Item } from './types';

export const getItem = (id: number): Promise<Item> =>
  invoke('get_item', { id });
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(tauri): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

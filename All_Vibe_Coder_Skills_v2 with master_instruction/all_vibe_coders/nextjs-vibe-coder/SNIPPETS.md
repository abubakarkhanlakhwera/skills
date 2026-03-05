# 🧩 SNIPPETS.md — Next.js Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Server Action with validation
```typescript
// app/items/actions.ts
'use server';
import { auth } from '@/auth';
import { z } from 'zod';

const schema = z.object({ name: z.string().min(1) });

export async function createItem(data: unknown) {
  const session = await auth();
  if (!session) throw new Error('Unauthorized');
  const parsed = schema.parse(data);
  return db.item.create({ data: { ...parsed, userId: session.user.id } });
}
```

### RSC with cache
```typescript
import { cache } from 'react';

const getUser = cache(async (id: string) => {
  return db.user.findUnique({ where: { id } });
});
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(next.js): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

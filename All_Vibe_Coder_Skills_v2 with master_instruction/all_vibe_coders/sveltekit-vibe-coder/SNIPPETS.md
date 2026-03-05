# 🧩 SNIPPETS.md — SvelteKit Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Form action with validation
```typescript
// +page.server.ts
export const actions = {
  create: async ({ request, locals }) => {
    if (!locals.user) redirect(303, '/login');
    const data = Object.fromEntries(await request.formData());
    const parsed = createSchema.safeParse(data);
    if (!parsed.success) return fail(400, { errors: parsed.error.flatten() });
    await db.insert(items).values({ ...parsed.data, userId: locals.user.id });
    redirect(303, '/items');
  },
};
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(sveltekit): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

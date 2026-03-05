# 🧩 SNIPPETS.md — Django REST Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Service layer pattern
```python
# items/services.py
def create_item(user: User, data: dict) -> Item:
    """All business logic lives here, not in views."""
    if Item.objects.filter(user=user, name=data["name"]).exists():
        raise ValidationError("Item with this name already exists")
    return Item.objects.create(user=user, **data)
```

### Optimized queryset
```python
class ItemListView(ListAPIView):
    def get_queryset(self):
        return (Item.objects
                .filter(user=self.request.user)
                .select_related("category", "owner")
                .prefetch_related("tags")
                .only("id", "name", "price", "category__name"))
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(django-rest): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

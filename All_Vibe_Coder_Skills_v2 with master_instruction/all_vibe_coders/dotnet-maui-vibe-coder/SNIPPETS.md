# 🧩 SNIPPETS.md — .NET MAUI Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### ViewModel with CommunityToolkit
```bash
[ObservableProperty]
private string title = "My Page";

[RelayCommand]
private async Task LoadDataAsync()
{
    var items = await _itemService.GetAllAsync();
    Items = new ObservableCollection<ItemViewModel>(items.Select(i => new ItemViewModel(i)));
}
```

### Shell navigation
```bash
await Shell.Current.GoToAsync($"{nameof(ItemDetailPage)}?id={item.Id}");
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(.net-maui): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

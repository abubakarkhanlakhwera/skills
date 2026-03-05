# 🧩 SNIPPETS.md — Kotlin Multiplatform Approved Code Snippets
> Curated, project-approved patterns for common tasks.
> The AI pulls from here before generating from scratch.
> Add new snippets after code review — these are the gold standard.

## How to Use This File
When asking the AI to implement something, say:
> "Use the approved snippet from SNIPPETS.md as a starting point"

The AI will adapt the snippet to the specific context rather than generating from scratch.

## Core Snippets

### Shared ViewModel
```kotlin
class ItemsViewModel(private val repo: ItemsRepository) : ViewModel() {
    private val _state = MutableStateFlow<ItemsState>(ItemsState.Loading)
    val state: StateFlow<ItemsState> = _state.asStateFlow()

    fun load() = viewModelScope.launch {
        _state.value = ItemsState.Success(repo.getAll())
    }
}
```

### expect/actual platform key
```kotlin
// commonMain
expect fun getSecureToken(key: String): String?

// androidMain
actual fun getSecureToken(key: String): String? =
    EncryptedSharedPreferences.create(...).getString(key, null)
```


## Adding New Snippets
1. Write the code the normal way
2. After review, extract the pattern here
3. Add a clear name and brief description
4. Commit with message: `snippets(kotlin-multiplatform): add [name]`

## Snippet Categories to Build Out
- [ ] Authentication / authorization pattern
- [ ] Error handling pattern  
- [ ] DB query / data access pattern
- [ ] Test setup / fixture pattern
- [ ] API client / HTTP call pattern
- [ ] Config / environment access pattern

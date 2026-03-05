## .NET MAUI Development Standards
> Sourced from: `.github/skills/dotnet-maui-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing pages, view models, and bindings first
- Less is more — avoid overcomplicating beyond what one ContentPage and ViewModel needs
- Fix roots, not symptoms — trace binding failures, layout issues, lifecycle errors to their cause
- Match the stack — .NET 8+, C#, .NET MAUI only
- One thing at a time — no refactoring AND adding features in one response

### Coding Style
- Clean, minimal, idiomatic C# with nullable reference types enabled
- PascalCase for classes/properties/commands, _camelCase for private fields
- MVVM strictly — all logic in ViewModel, pages are dumb views
- Use CommunityToolkit.Mvvm source generators (`[ObservableProperty]`, `[RelayCommand]`)
- Use Shell for navigation — never push pages manually without justification
- Bind everything via `{Binding}` — no code-behind logic except lifecycle overrides
- Use ResourceDictionary for colors, styles, sizes — no hardcoded values in XAML
- Remove unused xmlns, dead pages, commented XAML immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch binding symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No full page XAML generated without request
- ❌ No refactoring working ViewModels without permission
- ❌ No NuGet packages unless asked
- ❌ No business logic in code-behind
- ❌ Never end a session without a next step

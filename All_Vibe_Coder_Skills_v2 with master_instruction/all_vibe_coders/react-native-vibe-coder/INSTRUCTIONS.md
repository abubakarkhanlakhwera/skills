## React Native Development Standards
> Sourced from: `.github/skills/react-native-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing screens, navigation, and state first
- Less is more — avoid overcomplicating beyond what one component and hook needs
- Fix roots, not symptoms — trace layout bugs, re-renders, native crashes to their cause
- Match the stack — React Native 0.73+, Expo SDK, TypeScript only
- One thing at a time — no refactoring AND adding features in one response

### Coding Style
- TypeScript everywhere — no `any`, no untyped props
- Functional components with hooks only — never class components
- `StyleSheet.create()` for all styles — never inline style objects in JSX
- React Navigation for all navigation — never roll custom navigators
- Small, single-responsibility components — extract reusable ones to `components/`
- Custom hooks (`use*`) for all logic — no business logic in components
- `FlatList`/`SectionList` for lists — never `ScrollView` with `.map()`
- Remove unused imports, dead screens, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch layout symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No inline style objects in JSX
- ❌ No refactoring working screens without permission
- ❌ No new packages unless asked
- ❌ No ScrollView for long dynamic lists
- ❌ Never end a session without a next step

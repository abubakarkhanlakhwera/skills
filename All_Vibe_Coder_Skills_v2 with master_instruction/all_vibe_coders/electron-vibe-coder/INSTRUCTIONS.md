## Electron Development Standards
> Sourced from: `.github/skills/electron-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing main/renderer/preload code first
- Security first — context isolation and contextBridge are non-negotiable defaults
- Fix roots, not symptoms — trace IPC errors, window lifecycle bugs, build issues to their cause
- Match the stack — Electron 30+, Node.js, TypeScript only
- One thing at a time — no refactoring AND adding IPC channels in one response

### Coding Style
- TypeScript in all three layers: main, preload, and renderer
- Always `contextIsolation: true` and `nodeIntegration: false` — never disable these
- Expose APIs to renderer only through `contextBridge.exposeInMainWorld()` in preload
- Use `ipcMain.handle()` + `ipcRenderer.invoke()` for async IPC — never `sendSync`
- Keep main process thin — delegate business logic to dedicated modules
- Use `electron-builder` or `electron-forge` for packaging
- Validate all data received from renderer in main — treat it as untrusted
- Use `app.getPath()` for all file system paths — never hardcode OS paths
- Remove unused IPC channels, dead BrowserWindow configs, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch IPC symptoms — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ Never disable contextIsolation or enable nodeIntegration in renderer
- ❌ Never use ipcRenderer.sendSync
- ❌ Never put untrusted renderer data into Node.js APIs directly
- ❌ No refactoring working IPC channels without permission
- ❌ Never end a session without a next step

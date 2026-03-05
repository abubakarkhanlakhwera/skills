# 📌 STACK_VERSIONS.md — Electron Pinned Versions
> Single source of truth for all library versions in this project.
> Context7 uses these to fetch version-accurate documentation.
> Update whenever you upgrade a dependency.

## Core Stack
```yaml
electron                      : 30.x
node                          : 20.x
vite                          : 5.x
```

## Key Libraries (update with actual installed versions)
```yaml
electron                      : [run your package manager to find installed version]
better-sqlite3                : [run your package manager to find installed version]
keytar                        : [run your package manager to find installed version]
electron-builder              : [run your package manager to find installed version]
electron-updater              : [run your package manager to find installed version]
```

## Runtime & Tooling
```yaml
OS              : [e.g., macOS 14 / Ubuntu 22.04]
Package Manager : [e.g., npm 10.x / pip 24.x / cargo 1.78]
Node/Python/etc : [runtime version]
IDE             : [e.g., VS Code 1.90 / IntelliJ IDEA 2024.1]
```

## How to Update This File
Run the appropriate command and paste the output:
```bash
# Node.js projects
cat package.json | jq '.dependencies, .devDependencies'

# Python projects
pip freeze > requirements-lock.txt && cat requirements-lock.txt

# Go projects
cat go.mod

# Rust projects
cat Cargo.lock | grep "^name\|^version" | paste - -
```

## Context7 Version Fetch Instructions
When fetching docs, include version for accuracy:
```
get-library-docs: "/tiangolo/fastapi" topic: "routing" tokens: 5000
# Context7 will match to closest available docs version
```

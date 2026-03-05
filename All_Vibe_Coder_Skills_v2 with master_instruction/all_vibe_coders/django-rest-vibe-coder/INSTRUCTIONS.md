## Django REST Development Standards
> Sourced from: `.github/skills/django-rest-vibe-coder/SKILL.md`
> Always active. Every Copilot suggestion must follow these rules.

### Core Mindset
- Observe before acting — read existing models, serializers, and views first
- Django way first — use built-in Django/DRF tools before reaching for third-party packages
- Fix roots, not symptoms — trace 400s, serializer validation errors, ORM issues to their cause
- Match the stack — Django 5.x, DRF, Python 3.12+ only
- One thing at a time — no refactoring AND adding endpoints in one response

### Coding Style
- Class-based views with DRF generics — avoid raw `APIView` for standard CRUD
- `ModelSerializer` for model-backed endpoints — no manual field-by-field serializers for simple cases
- Always define `read_only_fields` and `extra_kwargs` in serializer `Meta`
- `select_related()` and `prefetch_related()` in querysets — never trigger N+1 queries
- Business logic in `services.py` per app — never in views or serializers
- `permission_classes` and `authentication_classes` per view — never rely on global defaults silently
- `django-filter` for filtering, `OrderingFilter` for sorting
- Django ORM for all DB operations — no raw SQL unless absolutely necessary and documented
- Remove unused models, dead endpoints, commented code immediately

### Debugging Format
- 🔍 What's broken → 📍 Where it is → 🌱 Root cause → 🔧 Fix → 💡 Why it works
- Never patch serializer errors — fix the root cause

### Code Change Format
- ❌ BEFORE (why wrong) → ✅ AFTER (what changed + why)
- Show only changed parts

### Context7
- Always resolve library docs before writing library-specific code
- `use context7 → resolve-library-id → get-library-docs (topic, tokens: 5000)`
- Docs win over training memory

### Hard Rules (Never Break)
- ❌ No N+1 queries without select_related/prefetch_related
- ❌ No business logic in serializers or views
- ❌ No raw SQL without documentation
- ❌ No refactoring working models without permission
- ❌ Never end a session without a next step

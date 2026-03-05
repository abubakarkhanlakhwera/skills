# 🏛️ DECISIONS.md — Docker + Compose Architecture Decision Records
> Every non-obvious technical decision gets a one-liner entry here.
> Future you (and the AI) will thank present you.

## Format
```
| Date       | Decision | Why | Alternatives | Decided By |
```

## Active Decisions

| Date | Decision | Why | Alternatives Considered | Decided By |
|------|----------|-----|------------------------|------------|
| [YYYY-MM-DD] | Use Docker 25+ / Compose v2 | [reason] | [other options] | [team/person] |
| [YYYY-MM-DD] | [PostgreSQL:16-alpine for persistence] | [reason] | [alternatives] | [team/person] |
| [YYYY-MM-DD] | [N/A — handled by application layer for auth] | [reason] | [alternatives] | [team/person] |

## Superseded Decisions

| Date | Original Decision | Superseded By | Reason for Change |
|------|-----------------|--------------|--------------------|
| [YYYY-MM-DD] | [old decision] | [new decision] | [why it changed] |

## Pending Decisions (Under Discussion)

| Topic | Options | Deadline | Owner |
|-------|---------|----------|-------|
| [e.g., caching strategy] | [Redis vs in-memory vs CDN] | [date] | [person] |

---
*Keep entries brief — this is a log, not an essay.*
*If a decision needs more explanation, link to a doc or PR.*

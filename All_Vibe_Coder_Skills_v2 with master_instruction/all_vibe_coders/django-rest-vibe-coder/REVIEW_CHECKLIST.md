# 🔍 REVIEW_CHECKLIST.md — Django REST Code Review Checklist
> Run through this before every PR is merged.
> The AI should self-check against this before presenting code.

## Django REST-Specific Checks
- [ ] Is business logic in services.py — not views or serializers?
- [ ] Are querysets using select_related/prefetch_related where needed?
- [ ] Are list endpoints paginated?
- [ ] Are serializers using explicit fields — not fields = '__all__'?
- [ ] Are Celery tasks used for slow operations?

## Universal Checks

### Correctness
- [ ] Does the code do what the task described?
- [ ] Are edge cases handled (empty input, null, 0, large values)?
- [ ] Are error cases handled and surfaced correctly?
- [ ] Are there no unintentional side effects?

### Code Quality
- [ ] Is the code DRY — no copy-paste logic?
- [ ] Are function/variable names self-documenting?
- [ ] Is the change minimal — no unrelated refactors?
- [ ] Are there no TODO/FIXME left unaddressed?

### Tests
- [ ] Are unit tests added for new logic?
- [ ] Do existing tests still pass?
- [ ] Are edge cases covered in tests?

### Security
- [ ] Is user input validated before use?
- [ ] Are no secrets or credentials in the diff?
- [ ] Are no sensitive values logged?

### Performance
- [ ] Does this introduce any N+1 queries or unnecessary loops?
- [ ] Is there any unbounded data return (missing pagination)?

### Documentation
- [ ] Is the CHANGELOG.md updated?
- [ ] Are significant decisions logged in DECISIONS.md?
- [ ] Are complex functions commented with "why" (not "what")?

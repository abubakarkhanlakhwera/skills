# 🔍 REVIEW_CHECKLIST.md — Terraform Code Review Checklist
> Run through this before every PR is merged.
> The AI should self-check against this before presenting code.

## Terraform-Specific Checks
- [ ] Are all resources in child modules — not the root module?
- [ ] Is for_each used instead of count for resources with identity?
- [ ] Are all secrets marked sensitive = true?
- [ ] Is remote backend configured with locking?
- [ ] Has tfsec or checkov been run on this change?

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

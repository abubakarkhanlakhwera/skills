# 🔒 SECURITY.md — SvelteKit Security Checklist
> Stack-specific security rules for this project.
> The AI must check these before suggesting any auth, data, or config code.

## SvelteKit-Specific Security Rules
- Validate all form action data with Zod before touching DB
- Use SvelteKit's CSRF protection — never disable it
- Auth checks at the top of every +page.server.ts load and action
- Never expose server-only env vars to client — use $env/static/private
- Use Lucia's session validation middleware in hooks.server.ts

## Universal Security Rules

### Secrets Management
- Never commit secrets, API keys, or credentials to VCS
- Use environment variables or secret managers for all sensitive config
- Rotate credentials immediately if accidentally exposed
- Use different credentials per environment (dev/staging/prod)

### Input Validation
- Validate and sanitize ALL user inputs before processing
- Use allowlists, not denylists, for input validation
- Validate on the server — client-side validation is UX only

### Authentication & Authorization
- Check authentication on every protected route/endpoint
- Check authorization (does this user own this resource?) separately from authentication
- Use short-lived tokens with refresh token rotation

### Data Protection
- Never log sensitive data (passwords, tokens, PII, payment info)
- Encrypt sensitive data at rest
- Use HTTPS/TLS for all data in transit — no HTTP in production

### Dependencies
- Keep dependencies updated — run security audits regularly
- Review new dependency licenses and security posture before adding
- Pin dependency versions in production

## Security Incident Response
If a security issue is found:
1. Do NOT push a fix directly to main
2. Create a private branch
3. Fix, test, and review
4. Deploy with a coordinated release
5. Document in DECISIONS.md what was changed and why

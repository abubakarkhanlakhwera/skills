# ⚡ PERFORMANCE.md — Docker + Compose Performance Rules
> Stack-specific performance rules for this project.
> The AI must consider these before suggesting data fetching, rendering, or processing code.

## Docker + Compose-Specific Performance Rules
- Order COPY instructions by change frequency — deps before source code
- Use .dockerignore to exclude .git, node_modules, __pycache__ — reduces build context
- Use BuildKit (DOCKER_BUILDKIT=1) for parallel multi-stage builds
- Use Alpine or distroless base images to minimize layer size

## Universal Performance Rules

### Measure First
- Profile before optimizing — never guess where the bottleneck is
- Establish a baseline metric before making changes
- Measure after the change — confirm the improvement

### Data Access
- Fetch only the data you need — select specific fields, not *
- Paginate all list operations — never return unbounded collections
- Cache expensive, rarely-changing data with appropriate TTL
- Use indexes on all columns used in WHERE, JOIN, or ORDER BY

### Network
- Minimize round trips — batch requests where possible
- Compress payloads — gzip/brotli for HTTP responses
- Use CDN for static assets
- Lazy-load content below the fold

### Code
- Avoid premature optimization — correctness first
- Avoid deep nesting and complex logic in hot paths
- Release resources (connections, file handles) promptly with defer/finally/using

## Performance Budget
```yaml
# Define target metrics for this project
API Response P50  : [e.g., <100ms]
API Response P99  : [e.g., <500ms]
Page Load (FCP)   : [e.g., <1.5s]
Page Load (LCP)   : [e.g., <2.5s]
DB Query Max      : [e.g., <50ms]
```

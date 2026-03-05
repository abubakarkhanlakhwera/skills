# Multi-stage build — never ship build tools in the final image
FROM node:20.14-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:20.14-alpine AS runtime
WORKDIR /app

# Run as non-root user — never root in production
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
COPY --from=builder --chown=appuser:appgroup /app/node_modules ./node_modules
COPY --chown=appuser:appgroup . .

USER appuser
EXPOSE 3000
CMD ["node", "src/server.js"]

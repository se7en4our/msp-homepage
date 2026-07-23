# --- builder ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG BUILD_SHA=dev
ARG BUILD_TIME=
ENV BUILD_SHA=$BUILD_SHA BUILD_TIME=$BUILD_TIME NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# --- runner ---
FROM node:20-alpine AS runner
WORKDIR /app
ARG BUILD_SHA=dev
ARG BUILD_TIME=
ENV NODE_ENV=production BUILD_SHA=$BUILD_SHA BUILD_TIME=$BUILD_TIME \
    NEXT_TELEMETRY_DISABLED=1 PORT=3000 HOSTNAME=0.0.0.0
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
CMD ["node", "server.js"]

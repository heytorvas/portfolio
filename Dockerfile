FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# Runtime only needs `node`. Strip the base image's global npm/corepack trees —
# Trivy flags HIGH/CRITICAL CVEs in npm's transitive deps (tar, sigstore, etc.)
# that never execute in this standalone server.
RUN addgroup -S nodejs && adduser -S nextjs -G nodejs \
	&& rm -rf \
		/usr/local/lib/node_modules/npm \
		/usr/local/lib/node_modules/corepack \
		/usr/local/bin/npm \
		/usr/local/bin/npx \
		/usr/local/bin/corepack
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
CMD exec node server.js

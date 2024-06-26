# Install dependencies only when needed
FROM node:20.15.0 AS deps
WORKDIR /app
COPY ./package.json ./
RUN yarn install --frozen-lockfile --cwd ./

# Rebuild the source code only when needed
FROM node:20.15.0 AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules

COPY ./ .

RUN yarn build

# Production image, copy all the files and run next
FROM node:20.15.0 AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 siptelgroup
RUN adduser --system --uid 1001 sipteluser

COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=sipteluser:siptelgroup /app/.next/standalone ./
COPY --from=builder --chown=sipteluser:siptelgroup /app/.next/static ./.next/static

USER sipteluser

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
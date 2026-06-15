# --- Stage 1: build the SPA (Vite) ---
FROM node:22-bookworm-slim AS frontend-build
WORKDIR /app
COPY package.json package-lock.json turbo.json tsconfig.json ./
COPY apps/web/package.json ./apps/web/
COPY packages/ ./packages/
RUN npm install --no-audit --no-fund

COPY apps/web ./apps/web
WORKDIR /app/apps/web
ENV VITE_API_URL=
ARG VITE_CLERK_PUBLISHABLE_KEY
ENV VITE_CLERK_PUBLISHABLE_KEY=$VITE_CLERK_PUBLISHABLE_KEY
RUN npm run build

# --- Stage 2: compile the API (TypeScript ->JavaScript) ---
FROM node:22-bookworm-slim AS backend-build
WORKDIR /app
COPY package.json package-lock.json turbo.json tsconfig.json ./
COPY apps/api/package.json ./apps/api/
COPY packages/ ./packages/
RUN npm install --no-audit --no-fund

COPY apps/api ./apps/api
WORKDIR /app/apps/api
RUN npm run build

# --- Stage 3: runtime image ---
FROM node:22-bookworm-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY package.json package-lock.json ./
COPY apps/api/package.json ./apps/api/
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force

COPY --from=backend-build /app/apps/api/dist ./dist
COPY --from=frontend-build /app/apps/web/dist ./public

EXPOSE 3001
USER node

CMD ["node", "dist/index.js"]
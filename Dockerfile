# Stage 1: Build stage
FROM oven/bun:1.1-alpine AS builder

WORKDIR /app

# Copy package descriptors first to leverage Docker layer caching
COPY package.json bun.lock ./

# Install dependencies using Bun frozen lockfile
RUN bun install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Run production build using Astro inside Bun runtime
RUN bun run build

# Stage 2: Production serve stage
FROM nginx:1.25-alpine

# Remove default configuration and static files
RUN rm -rf /usr/share/nginx/html/* /etc/nginx/conf.d/default.conf

# Copy production build outputs
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom optimized Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Adjust permissions to support running Nginx as non-root user 'nginx'
RUN touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid && \
    chown -R nginx:nginx /var/cache/nginx && \
    chown -R nginx:nginx /var/log/nginx && \
    chown -R nginx:nginx /etc/nginx/conf.d && \
    chown -R nginx:nginx /usr/share/nginx/html

# Switch to non-root user for security compliance
USER nginx

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:8080/ || exit 1

CMD ["nginx", "-g", "daemon off;"]

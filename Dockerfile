# Build Stage
FROM node:18.0-alpine3.14 as build-stage

# 安装 pnpm
RUN npm install -g pnpm

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN pnpm install

COPY . .

RUN pnpm run build

# production stage
FROM node:18.0-alpine3.14 as production-stage

# 安装 pnpm
RUN npm install -g pnpm

# 从构建阶段拷贝/dist目录到生产阶段的/app目录
COPY --from=build-stage /app/dist /app

# 从构建阶段拷贝 package.json 和 pnpm-lock.yaml 到/app目录
COPY --from=build-stage /app/package.json /app/pnpm-lock.yaml /app/

WORKDIR /app

# 使用 pnpm 安装生产环境依赖
RUN pnpm install --production

# 暴露端口号 3000
EXPOSE 3000

# 定义启动命令
CMD ["node", "/app/main.js"]

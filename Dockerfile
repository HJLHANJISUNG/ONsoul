# 使用Node.js 18 Alpine镜像作为基础
FROM node:18-alpine

# 设置工作目录
WORKDIR /app

# 安装系统依赖（包括SQLite编译工具）
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    sqlite \
    sqlite-dev

# 复制package.json文件
COPY package*.json ./

# 安装Node.js依赖
RUN npm install

# 复制所有源代码
COPY . .

# 创建uploads目录
RUN mkdir -p uploads

# 暴露端口
EXPOSE 3000

# 启动命令
CMD ["npm", "start"] 
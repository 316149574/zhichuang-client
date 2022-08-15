# build stage
FROM node:14.17.0 as build-stage
#维护者
LABEL maintainer=316149574@qq.com

# 工作目录， 进入容器 命令行默认的工作目录
WORKDIR /app

# 将当前项目文件中的文件拷贝到容器中的/app目录 
COPY . .

# 安装依赖
RUN npm install

# 打包构建项目生成dist
RUN npm run build

# production stage  生产发布环节  
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
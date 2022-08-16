### 智创官网开发 
官网地址：http://zhichuang.team
jenkins地址：zhichuang.team:13900

### 技术栈
- node+koa2+mongodb
- vue3+vite+elementplus
- jenkins+github自动化
- docker容器技术
-linux知识

```
#!/bin/bash
CONTAINER=${container_name}
PORT=${port}
#通过jenkins从github拉取源码中的Dockerfile文件构建一个镜像
docker build --no-cache -t ${image_name}:${tag} .
#运行构建好的镜像---创建容器将项目运行起来 
docker run -itd --name $CONTAINER -p $PORT:80 ${image_name}:${tag}
```
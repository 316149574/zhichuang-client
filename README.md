### 智创官网开发 
官网地址：http://zhichuang.team
jenkins地址：zhichuang.team:13900

### 技术栈
- node+koa2+mongodb
- vue3+vite+elementplus
- jenkins+github自动化
- docker容器技术
-linux知识

### jenkins 自动构建shell脚本
```
#!/bin/bash
CONTAINER=${container_name}
PORT=${port}
#通过jenkins从github拉取源码中的Dockerfile文件构建一个镜像
docker build --no-cache -t ${image_name}:${tag} .

RUNNING=${docker inspect --format="{{ .State.Running }}"  $CONTAINER 2 > /dev/null}
# 条件判断

if [ ! -n $RUNNING ]; then  # 如果容器正在运行！
  echo "$CONTAINER does not exit"
  return 1
fi
if [ "$RUNNING" == "false" ]; then # 如果容器停止
  echo "$CONTAINER is not running."
  return 2
else #如果容器在运行
  echo "$CONTAINER is running"
  # 删除相同镜像
  matchingStarted=$(docker ps --filter="name=$CONTAINER" -q | xargs)
  if [ -n $matchingStarted ]; then #容器id不为空
  	docker stop $matchingStarted
  fi
  matching=$(docker ps -a --filter="name=$CONTAINER" -q | xargs)
  if [ -n $mathing ]; then
  	docker rm $matching
  fi
fi

echo "RUNNING is ${RUNNING}"

#运行构建好的镜像---创建容器将项目运行起来 
docker run -itd --name $CONTAINER -p $PORT:80 ${image_name}:${tag}
```
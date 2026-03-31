#!/bin/sh
git pull
docker build -f ./dockerfiles/dockerfile.web.prod.ssr -t chuhung-angular16-web-v1:latest .
docker ps -a -q --filter "name=chuhung-angular16-web-v1" | grep -q . && docker rm -f chuhung-angular16-web-v1
docker run --detach \
    --name chuhung-angular16-web-v1 \
    --env "VIRTUAL_HOST=tslmai.org.tw,www.tslmai.org.tw" \
    --env "VIRTUAL_PORT=80" \
    --env "LETSENCRYPT_HOST=tslmai.org.tw,www.tslmai.org.tw" \
    --env "LETSENCRYPT_EMAIL=alert@starxfuture.com" \
    --restart unless-stopped \
    chuhung-angular16-web-v1:latest
docker image prune -f

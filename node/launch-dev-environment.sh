#! /bin/bash

# Launches a container with node15
# mounting ./src folder in /src (container path)
docker run -it \
           --name node-dev \
           --workdir /src \
           --env-file ../.env \
           --mount type=bind,source="$(pwd)"/src,target=/src \
           --rm \
           -p "3000:3000" \
           node:15 \
           bash
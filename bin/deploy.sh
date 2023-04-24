#!/bin/bash
if [[ $1 = "prod" || $1 = "dev" ]] && [[ $2 = "down" || $2 = "up" ]]; then
    cd ..
    fileEnv="docker-compose.${1}.yaml"
    down0rUp=$2
    echo "Running docker-compose -f docker-compose.yaml -f $fileEnv $down0rUp"
    docker-compose -f docker-compose.yaml -f $fileEnv $down0rUp
else
    echo "Need to follow format ./deploy.sh prod|dev down up"
fi
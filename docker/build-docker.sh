#!/bin/bash

cd ..
yarn install
yarn run build:docs
sleep 5
docker build --rm -f docker/Dockerfile -t react-windy-ui:latest .
docker images | grep react-windy-ui

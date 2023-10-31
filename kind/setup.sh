#!/bin/bash

set -eou pipefail

if [ $# -eq 0 ]; then
    echo "Error: Please provide one argument."
    exit 1
fi

KIND_CLUSTER=$(docker ps -a -q --filter="name=practera-badge")

if [ -z "${KIND_CLUSTER}" ]; then
    kind create cluster --config=kind/config.yml
    sleep 10
fi

kubectl config use-context kind-practera-badge

# load local docker image to cluster
if [[ "$1" == "load" ]]; then
    docker save api:latest | docker exec --privileged -i practera-badge-control-plane ctr --namespace=k8s.io images import --all-platforms -
    docker save migrations:latest | docker exec --privileged -i practera-badge-control-plane ctr --namespace=k8s.io images import --all-platforms -
    docker save web.app:latest | docker exec --privileged -i practera-badge-control-plane ctr --namespace=k8s.io images import --all-platforms -
fi

kubectl apply -f $(pwd)/kind/config-map.yml

kubectl apply -f $(pwd)/kind/deployment/dynamodb-local.yml
kubectl apply -f $(pwd)/kind/deployment/dynamodb-admin.yml

sleep 10

kubectl wait --timeout=5m --for=condition=ready pod -l app=dynamodb-local
kubectl wait --timeout=5m --for=condition=ready pod -l app=dynamodb-admin

kubectl apply -f $(pwd)/kind/services/dynamodb-local.yml
kubectl apply -f $(pwd)/kind/services/dynamodb-admin.yml

sleep 10

kubectl apply -f $(pwd)/kind/deployment/
sleep 5

kubectl wait --timeout=5m --for=condition=ready pod -l app=api
kubectl wait --timeout=5m --for=condition=ready pod -l app=web-app

kubectl apply -f $(pwd)/kind/services/

sleep 5

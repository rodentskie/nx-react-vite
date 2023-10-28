#!/bin/bash

set -e

APPS=(api)

for app in "${APPS[@]}"; do
    echo "Serving: "$app""
    APP="$app" pm2 start npm --name "$app" -- run serve
done

#!/usr/bin/env bash
echo "Running post-clone script..."

cd .. && cd ..
yarn install

cd packages/app

# Trick App Center into using yarn
touch yarn.lock

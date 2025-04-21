#!/bin/bash

# git submodule update --init --recursive

cd uniswap/sdk
yarn
yarn build

cd ../interface
yarn

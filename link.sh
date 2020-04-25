#!/bin/bash

pushd moduleA
npm install
npm link
popd

pushd moduleB
rm -rf dist
npm link module_a
popd
#!/bin/bash

pushd moduleB
rm -rf dist
npm unlink module_a
popd

pushd moduleA
npm unlink
popd
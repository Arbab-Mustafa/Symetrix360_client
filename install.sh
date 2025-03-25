#!/bin/bash

corepack enable

yarn set version stable

yarn install 

yarn dlx @yarnpkg/sdks vscode

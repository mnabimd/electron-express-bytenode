# Introduction

This is a simple electron + express app alongside with Bytenode.
First, the webpack will help us to bundle our (electron + express) into one single file @ build/server-bundle.js

## Compiling our Express source

First, install webpack-cli globally to your machine and then simply run (webpack --watch) in the terminal to bundle our server files.

## Compiling our Electron source and Source Code Protection

When you run (npm run start) the main.is being executed, if the compiled version of electron is founded @ the root of the project, the compiling will be skipped Otherwise, the bytenode will generate the binary version of our electron app @ the root with the name of (main-window.jsc).

'use strict';

const bytenode = require('../../');
const fs = require('fs');
const v8 = require('v8');

v8.setFlagsFromString('--no-lazy');

if (!fs.existsSync('./main-window.jsc')) {
   // First let's compile our server files into one bundle
   // This will compile the bundle server file that was bundled by webpack
   bytenode.compileFile('./build/server-bundle.js', './main-window.jsc');
}

require('./main-window.jsc');

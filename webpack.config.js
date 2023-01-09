var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
   .filter(function (x) {
      return ['.bin'].indexOf(x) === -1;
   })
   .forEach(function (mod) {
      nodeModules[mod] = 'commonjs ' + mod;
   });

module.exports = {
   mode: 'production',
   // Compile the src file into one bundle (server-bundle.js) and then bytenode will only encrypt that one file
   entry: './main-window.src.js',
   target: 'node',
   output: {
      path: path.join(__dirname, 'build'),
      filename: 'server-bundle.js'
   },
   externals: nodeModules
};

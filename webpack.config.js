const path = require('path');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

console.log('src'+ SRC_DIR);
console.log('dist'+ DIST_DIR);

module.exports = {
  entry: `./client/src/index.jsx`,
  output: {
    filename: 'main.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"]
        },
      },
    ],
  }
};
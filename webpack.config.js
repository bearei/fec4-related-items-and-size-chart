const path = require('path');

const reactParentComponentPath = path.join(__dirname, '/client/src/js/components/container/App.jsx');
const includePath = path.join(__dirname, '/client/src/js/components/');

module.exports = {
  entry: ['@babel/polyfill', reactParentComponentPath],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        include: includePath,
        use: {
          loader: "babel-loader"
        }
      },
    ]
  }
};
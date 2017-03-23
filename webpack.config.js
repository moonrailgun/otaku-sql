var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  target: 'electron',
  devtool: 'eval-source-map',//生产环境使用source-map
  entry: {
    main: path.join(__dirname, './src/js/main.js')
  },
  output: {
    path: path.join(__dirname, './app'),
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[chunkhash].js',
    sourceMapFilename: 'assets/js/[name].map'
  },
  node: {
    __dirname: false
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
}

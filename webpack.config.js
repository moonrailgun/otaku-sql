var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  target: 'electron',
  devtool: 'source-map',
  entry: {
    main: path.join(__dirname, './src/js/main.js')
  },
  output: {
    path: path.join(__dirname, './app'),
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/[chunkhash].js',
    sourceMapFilename: 'assets/js/[name].map',
    libraryTarget: 'var'
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
  },
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
}

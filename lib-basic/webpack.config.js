const webpack = require('webpack');


module.exports = {
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    filename: 'main.bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    loaders:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [new webpack.DefinePlugin({
    'process.env':{
      'NODE_ENV': JSON.stringify('production')
    }
  })]
};
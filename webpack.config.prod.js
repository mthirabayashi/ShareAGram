var webpack = require("webpack");

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: "./app/assets/javascripts",
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-maps',
  module: {
    loaders: [
    {
      test: [/\.jsx?$/, /\.js?$/],
      exclude: /(node_modules|bower_components)/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.node$/,
      loader: "node-loader"
    }
    ]
  },
  plugins:[
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
};

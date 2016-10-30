const path = require("path");

module.exports = {
  context: __dirname,
  entry: "./frontend/index.jsx",
  output: {
    path: path.join(__dirname, 'app', 'assets', 'javascripts'),
    filename: "bundle.js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  devtool: 'source-maps',
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    },
    {
      test: /\.node$/,
      loader: "node-loader"
    }
    ]
  }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)?$/,
      exclude: /node_module/,
      use: {
        loader: 'babel-loader'
      }
    },

    {
      test: /\.css?$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
      ]
    },
    {
      test: /\.scss$/,
      use: [
        { loader: "style-loader" },
        { loader: "css-loader" },
        { loader: "sass-loader" }
      ]
    },
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
}
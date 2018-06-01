const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './src/index.web.js',
    ],
  },
  target: 'web',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'build/web/'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader']
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin([
      path.join(__dirname, 'build/web/'),
    ]),
    new HtmlWebpackPlugin({
      title: 'Reaction',
      filename: 'index.html',
      template: './src/web/index.html',
    }),
    new WorkboxPlugin.GenerateSW({
      swDest: './sw.js',
    })
  ],
};
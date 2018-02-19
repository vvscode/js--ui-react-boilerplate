'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

const paths = require('./paths');

module.exports = {
  entry: [
    'react-dev-utils/webpackHotDevClient',
    'react-hot-loader/patch',
    paths.appIndexJs,
  ],

  output: {
    path: paths.appBuild,
    filename: 'static/js/bundle.js',
    publicPath: paths.publicUrl,
    pathinfo: true,
  },

  resolve: {
    alias: {
      '@': paths.appSrc,
    },
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
    ],
  },

  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml,
    }),
  ],

  devtool: 'cheap-module-source-map',

  performance: {
    hints: false,
  },
};

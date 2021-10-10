const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  merge,
} = require('webpack-merge');

const commonConfig = require('./webpack.common');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:
        './public/index.html',
    }),
  ],
};

module.exports = merge(
  commonConfig,
  devConfig
);

const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-cheap-source-map',
  devServer: {
    contentBase: `${common.externals.paths.dist}`,
  }
});
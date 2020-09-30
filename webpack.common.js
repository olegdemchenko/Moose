const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const StylelintWebpackPlugin = require('stylelint-webpack-plugin');

const paths = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
  node_modules: path.join(__dirname, '/node_modules'),
}

module.exports = {
  externals: {
    paths: paths
  },
  entry: paths.src,
  output: {
    filename: '[name].js',
    path: paths.dist
  },
  resolve: {
    alias: {
      '~': paths.src,
      'Node_modules': paths.node_modules,
    }
  },
  module: {
    rules: [
      {
        test: /\.(ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }],
      },
      {
        test: /\.(jpg|png)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'img/'
          }
        }],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      }
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: `${paths.src}/index.html`,
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.src}/img`,
          to: `${paths.dist}/img`,
        },
        {
          from: `${paths.src}/fonts`,
          to: `${paths.dist}/fonts`,
        }
      ]
    }),
    new StylelintWebpackPlugin({
      configFile: '.stylelintrc.json',
      fix: true,
    })
  ]
}
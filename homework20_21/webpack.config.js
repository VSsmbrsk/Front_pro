const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/script.js',

  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"  
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader"
        ],
      },
    ],
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin(),       
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'main.min.css',
    }),
  ],

  devServer: {
    static: './dist',
    hot: true,
    open: true,
  },

  mode: 'development',
};

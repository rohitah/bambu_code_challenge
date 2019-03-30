const { resolve } = require("path");
const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  output: {
    filename: "[name].min.js",
    chunkFilename: "[name].chunk.js",
    path: resolve("dist"),
    publicPath: "dist/"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve("dist", "index.html"),
      template: resolve("public", "index-tmp.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
        uglifyOptions: {
          compress: {
            inline: false
          }
        }
      })
    ],
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "all",
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/dist/images/",
              outputPath: "/images/"
            }
          }
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/dist/fonts/",
              outputPath: "/fonts/"
            }
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map"
});

const { resolve } = require("path");
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  output: {
    path: resolve("public"),
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve("public", "index.html"),
      template: resolve("public", "index-tmp.html")
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(png|jp(e*)g|gif|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              publicPath: "/images/",
              outputPath: "images/"
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
              publicPath: "/fonts/",
              outputPath: "fonts/"
            }
          }
        ]
      }
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: [path.join(__dirname, "public")],
    historyApiFallback: true,
    hot: true,
    inline: true
  }
});

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const multi = require("multi-loader");

const PATHS = {
  src: path.join(__dirname, "src"),
  dist: path.join(__dirname, "dist"),
};

module.exports = {
  mode: "development",
  target: "node",
  entry: path.join(PATHS.src, "main.js"),
  output: {
    path: PATHS.dist,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.worker\.js$/,
        loader: "worker-loader",
        options: {
          esModule: false,
        },
      },
      {
        test: /\.scss$/,
        loader: multi("style-loader!css-loader!sass-loader", "raw-loader"),
      },
      {
        test: /\.(png|jpe?g|gif|woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "media/",
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./templates/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
};

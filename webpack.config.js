const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const multi = require("multi-loader");
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const markdownPlugin = require("markdown-html-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, "src"),
  pages: path.join(__dirname, "dist"),
};

module.exports = {
  mode: "development",
  target: "node",
  entry: path.join(PATHS.src, "main.js"),
  output: {
    path: PATHS.pages,
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
        // use: "raw-loader"
        loader: multi("!style-loader!css-loader!sass-loader", "raw-loader"),
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
      // {
      //   test: /\.(md)$/,
      //   use: [
      //     "html-loader",
      //     {
      //       loader: "markdown-loader",
      //       options: {
      //         highlight: (code, lang) => {
      //           if (
      //             !lang ||
      //             ["text", "literal", "nohighlight"].includes(lang)
      //           ) {
      //             return `<pre class="hljs">${code}</pre>`;
      //           }
      //           const html = highlight.highlight(lang, code).value;
      //           return `<span class="hljs">${html}</span>`;
      //         },
      //       },
      //     },
      //   ],
      // },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./templates/index.html",
      filename: "index.html",
      cache: true,
    }),
    new markdownPlugin({
      filePath: "../md",
      exportPath: "../pages",
      template: "../templates/markdown.html",
    }),
    // "postcss-preset-env",
    tailwindcss,
    autoprefixer,
  ],
};

const path = require("path");
const SRC_DIR = path.join(__dirname, "/client/source");
const PUBLIC_DIR = path.join(__dirname, "/client/public");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: PUBLIC_DIR,
  },
  devtool: "eval-source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
};

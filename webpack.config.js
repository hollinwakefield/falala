const path = require("path");
const SRC_DIR = path.join(__dirname, "/client/source");
const PUBLIC_DIR = path.join(__dirname, "/client/public");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const BrotliPlugin = require("brotli-webpack-plugin"); //brotli
const CompressionPlugin = require("compression-webpack-plugin"); //gzip

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: "bundle.js",
    path: PUBLIC_DIR,
  },
  devtool: "",
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
  plugins: [
    new BundleAnalyzerPlugin(),
    // new CompressionPlugin({
    //   //gzip plugin
    //   filename: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 8192,
    //   minRatio: 0.8,
    // }),
    // new BrotliPlugin({
    //   asset: "[path].br[query]",
    //   test: /\.(js|css|html|svg)$/,
    //   threshold: 10240,
    //   minRatio: 0.8,
    // }),

    new CompressionPlugin({
      // asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7,
    }),
    new BrotliPlugin({
      asset: "[path].br[query]",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.7,
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },
};

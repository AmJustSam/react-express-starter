const HtmlWebpackPlugin = require("html-webpack-plugin");
//const WebpackAnalyze = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  devtool: false,
  entry: "./src/index.js",
  module: {
    rules: [
       {test: /\.js$/, exclude: /node_modules/, use: {loader: "babel-loader"}},
       {test: /\.css$/i, use: ["style-loader","css-loader"]},
       {test: /\.s[ac]ss$/i, use: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },

  devServer: {
    historyApiFallback: true
  },

  output: {
   chunkFilename: "[name].bundle.js",
   filename: "[name].bundle.js"
  },

  plugins: [
     new HtmlWebpackPlugin({
       template: "./public/index.html",
     })
  ]
}
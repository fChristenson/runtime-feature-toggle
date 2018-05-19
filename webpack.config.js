const webpack = require("webpack");
const path = require("path");

module.exports = {
  entry: path.join(__dirname, "main.js"),
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["babel-preset-react"]
        }
      }
    ]
  }
};

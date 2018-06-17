const path = require("path");

module.exports = {
  entry: {
    v1: path.join(__dirname, "main.v1.js"),
    v2: path.join(__dirname, "main.v2.js"),
    v3: path.join(__dirname, "main.v3.js")
  },
  output: {
    path: __dirname,
    filename: "bundle.[name].js"
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

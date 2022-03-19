const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");

module.exports = {
  entry: "./index.js",
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 1337
  },
  output: {
    publicPath: "auto"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"]
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "snake",
      filename: "remoteEntry.js",
      remotes: {
        apple: `apple@${getRemoteEntryUrl(1338)}`,
        engine: `engine@${getRemoteEntryUrl(1339)}`,
        plum: `plum@${getRemoteEntryUrl(1340)}`,
        orange: `orange@${getRemoteEntryUrl(1341)}`
      },
      shared: [
        {
          react: { singleton: true, eager: true },
          "react-dom": { singleton: true, eager: true },
          mobx: { eager: true },
          "mobx-react": { eager: true }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
};

function getRemoteEntryUrl(port) {
  const { HOSTNAME = "" } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!HOSTNAME.includes("sandbox")) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split("-");
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}
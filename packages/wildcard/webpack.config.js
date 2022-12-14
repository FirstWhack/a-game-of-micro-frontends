const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { ModuleFederationPlugin } = webpack.container;
const storeHomepage = require('@micro-snake/engine/package.json').homepage;
const deps = require('./package.json').dependencies;

// some webpack5/Node18 quirk, better than going with legacy openssl provider :shrug:
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);


module.exports = (_, argv) => ({
  entry: './index.js',
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 1340
  },
  output: {
    publicPath: 'auto',
    hashFunction: "sha256"
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'wildcard',
      filename: 'remoteEntry.js',
      exposes: {
        './Teleport': './app'
      },
      remotes: {
        engine: `engine@${
          argv.mode === 'production'
            ? `${storeHomepage}/remoteEntry.js`
            : getRemoteEntryUrl(1339)
        }`
      },
      shared: [
        {
          react: {
            singleton: true,
            requiredVersion: deps.react
          },
          'react-konva': {
            singleton: true,
            requiredVersion: deps['react-konva']
          },
          konva: {
            singleton: true,
            requiredVersion: deps.konva
          },
          mobx: { singleton: true, requiredVersion: deps.mobx },
          'mobx-react': { singleton: true, requiredVersion: deps['mobx-react'] }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
});

function getRemoteEntryUrl(port) {
  const { CODESANDBOX_SSE, HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!CODESANDBOX_SSE) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}

const path = require('path');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;

// some webpack5/Node18 quirk, better than going with legacy openssl provider :shrug:
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

module.exports = {
  entry: {},
  mode: 'development',
  devtool: 'eval-cheap-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 1339
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
    extensions: ['.ts', '.js']
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'engine',
      filename: 'remoteEntry.js',
      exposes: {
        './Store': './src/gameStore'
      },
      shared: [
        {
          react: {
            singleton: true,
            eager: true,
            requiredVersion: '^17.0.2'
          },
          mobx: { eager: true },
          'mobx-react': { eager: true }
        }
      ]
    })
  ]
};

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { ModuleFederationPlugin } = webpack.container;

module.exports = {
  entry: './index.js',
  mode: 'development',
  // devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 1341
  },
  output: {
    publicPath: 'auto'
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
      name: 'orange',
      filename: 'remoteEntry.js',
      exposes: {
        './Orange': './app'
      },
      remotes: {
        engine: `engine@${getRemoteEntryUrl(1339)}`
      },
      shared: [
        {
          react: { singleton: true, eager: true },
          'react-dom': { singleton: true, eager: true },
          mobx: { eager: true },
          'mobx-react': { eager: true }
        }
      ]
    }),
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ]
};

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

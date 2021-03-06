const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const storeHomepage = require('@micro-snake/engine/package.json').homepage;
const deps = require('./package.json').dependencies;

module.exports = (_, argv) => ({
  entry: './index.js',
  mode: argv.mode,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 1337
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
      name: 'snake',
      filename: 'remoteEntry.js',
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
  const { HOSTNAME = '' } = process.env;

  // Check if the example is running on codesandbox
  // https://codesandbox.io/docs/environment
  if (!HOSTNAME.includes('sandbox')) {
    return `//localhost:${port}/remoteEntry.js`;
  }

  const parts = HOSTNAME.split('-');
  const codesandboxId = parts[parts.length - 1];

  return `//${codesandboxId}-${port}.sse.codesandbox.io/remoteEntry.js`;
}

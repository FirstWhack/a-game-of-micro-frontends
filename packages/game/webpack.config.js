const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin =
  require('webpack').container.ModuleFederationPlugin;
const path = require('path');
const storeHomepage = require('@micro-snake/engine/package.json').homepage;

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
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/](@mui)[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
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
            eager: true,
            requiredVersion: '^17.0.2'
          },
          mobx: { eager: true },
          'mobx-react': { eager: true }
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

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve('./dist'),
  },
  devServer: {
    hot: true,
    static: path.resolve('./dist'),
    compress: true,
    port: 8564,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  }, // Add closing brace for resolve object
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000,
  }, // Add closing brace for performance object
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      inject: false,
      template: './dist/index.html',
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true, // webpack@1.x
              disable: true, // webpack@2.x and newer
            },
          },
        ],
      },
    ],
  },
};
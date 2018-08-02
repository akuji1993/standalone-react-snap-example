const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT;

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    app: [
      './src/index.js'
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  mode: "development", 
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/html/index.html'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.join(__dirname, 'src'),
            exclude: path.join(__dirname, 'node_modules'),
            loader: 'babel-loader',
            options: {
                presets: ['babel-preset-env', 'react', 'stage-2']
            }
        },
        {
            test: /\.scss$/,
            use: [
            'style-loader',
            'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader'
            ]
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg|png|jpg)$/,
            loader: 'file-loader'
        }
    ]
  }

};
const path = require('path');
const MODE = 'production';
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: MODE,
  entry: path.resolve(__dirname, 'src/script/main.js'),
  output: {
    filename: 'script/app.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.scss/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              url: false,
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style/index.css',
      ignoreOrder: true,
    })
  ],
  devServer: {
    contentBase: 'dist',
    open: true
  },
};

const path = require('path');

const MODE = 'production';
const enabledSourceMap = MODE === 'development';

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
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: [
          // linkタグに出力する機能
          'style-loader',
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,

              // 0 => no loaders (default);
              // 1 => postcss-loader;
              // 2 => postcss-loader, sass-loader
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: 'dist',
    open: true
  },
};

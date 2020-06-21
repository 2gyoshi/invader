const path = require('path');

const MODE = 'development';
const entryPath  = path.resolve(__dirname, 'src/script/main.js');
const outputPath = path.resolve(__dirname, 'dist');
const fileName   = 'script/main.js';
const devServerRoot    = 'dist';
const enabledSourceMap = MODE === 'development';

module.exports = {
  mode: MODE,
  entry: path.resolve(__dirname, 'src/script/main.js'),
  output: {
    filename: 'script/main.js',
    path: path.resolve(__dirname, 'dist'),
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

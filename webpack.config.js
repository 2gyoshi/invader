const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/script/main.js'),
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/script'),
  },
  devServer: {
    contentBase: 'dist',
    open: true
  }
};

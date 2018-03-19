const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',
  module: {
    rules: [
      {test: /\.css$/, use: ExtractTextPlugin.extract({use: 'css-loader'})}
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};

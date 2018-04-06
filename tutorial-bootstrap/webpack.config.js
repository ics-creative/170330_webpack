const ExtractTextPlugin = require('extract-text-webpack-plugin');

// [定数] webpack の出力オプションを指定します
// 'production' か 'development' を指定
const MODE = 'development';

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = (MODE === 'development');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  module: {
    rules: [
      {
        // 対象となるファイルの拡張子
        test: /\.s?a?css$/,
        // Sassファイルの読み込みとコンパイル
        use: ExtractTextPlugin.extract([
          // CSSをバンドルするための機能
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: true,
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
              // プロダクションビルドのときだけ空白文字を取り除く
              minimize: MODE === 'production',
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2
            },
          },
          // PostCSSのための設定
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: enabledSourceMap,
            },
          },
          // Sassをバンドルするための機能
          {
            loader: 'sass-loader',
            options: {
              // ソースマップの利用有無
              sourceMap: enabledSourceMap,
            }
          }
        ]),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
};

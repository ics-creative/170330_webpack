const webpack = require('webpack');

module.exports = {

  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'production',


  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: {
    'import_all': './src/import_all.ts',
    'import_observable': './src/import_observable.ts',
    'import_each': './src/import_each.ts',
    'import_pipe': './src/import_pipe.ts',
  },
  // ファイルの出力設定
  output: {
    // 出力ファイル名
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        loader: 'ts-loader'
      }
    ]
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [
      '.ts', '.js'
    ]
  }
};

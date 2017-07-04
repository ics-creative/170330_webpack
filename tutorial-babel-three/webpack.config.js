module.exports = {
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: './src/main.js',
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        // 拡張子 .js の場合
        test: /\.js$/,
        use: [
          {
            // Babel を利用する
            loader: 'babel-loader',
            // Babel のオプションを指定する
            options: {
              presets: [
                // ES2015 を ES5 に変換
                // {modules: false}で Tree Shaking 機能を有効にする
                ['es2015', {modules: false}]
              ]
            }
          }
        ],
        // node_modules は除外する
        exclude: /node_modules/,
      }
    ]
  },
  // ソースマップを有効にする
  devtool: 'source-map'
};

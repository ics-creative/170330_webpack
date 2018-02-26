module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  entry: './src/main.js',
  output: { // ファイルの出力設定
    path: `${__dirname}/dist`,  //  出力ファイルのディレクトリ名
    filename: 'main.js'  // 出力ファイル名
  },
  module: {
    rules: [
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        // Sassファイルの読み込みとコンパイル
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // ソースマップを有効にする
              sourceMap: true,
            },
          },
          'sass-loader',
        ]
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|eot|wof|woff|ttf|svg)$/,
        // 画像をBase64として取り込む
        loader: 'url-loader'
      }
    ]
  }
};

module.exports = {
  entry: './src/main.js',
  output: { // ファイルの出力設定
    path: `${__dirname}/build`,  //  出力ファイルのディレクトリ名
    filename: 'bundle.js'  // 出力ファイル名
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
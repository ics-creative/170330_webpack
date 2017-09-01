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
        loaders: [
          'style-loader',
          'css-loader',
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
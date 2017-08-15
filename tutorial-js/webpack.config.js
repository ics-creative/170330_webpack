module.exports = {
  // エントリーポイントの指定
  entry: './src/main.js',
  // ファイルの出力設定
  output: {
    // 出力先のフォルダー名
    path: `${__dirname}/build`,
    // 出力ファイル名
    filename: 'bundle.js'
  }
};
module.exports = {
  entry: {
    'step2': './docs/step2/main.js',
    'step3': './docs/step3/main.js',
    'step4': './docs/step4/main.js',
  },
  output: { // ファイルの出力設定
    path: `${__dirname}/docs`,  //  出力ファイルのディレクトリ名
    filename: '[name]/bundle.js'  // 出力ファイル名
  },
  module: {
    rules: [  // Loaderの設定
      // CSSファイルの読み込み
      {
        test: /\.css/,  // 対象となるファイルの拡張子
        // ローダー名
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            // オプションでCSS内のurl()メソッドの取り込みを禁止する¬
            options: {url: false}
          }
        ]
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        // ローダー名
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            // オプションでCSS内のurl()メソッドの取り込みを禁止する¬
            options: {url: false}
          },
          'sass-loader'
        ]
      }
    ]
  }
};
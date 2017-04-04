module.exports = {
  entry: {
    "step1": "./docs/step1/main.js",
    "step2": "./docs/step2/main.js",
    "step3": "./docs/step3/main.js"
  },
  output: { // ファイルの出力設定
    path: __dirname + "/docs",  //  出力ファイルのディレクトリ名
    filename: "[name]/bundle.js"  // 出力ファイル名
  },
  module: {
    rules: [  // Loaderの設定
      // CSSファイルの読み込み
      {
        test: /\.css/,  // 対象となるファイルの拡張子
        loaders: ["style-loader", "css-loader"] // ローダー名
      },
      // Sassファイルの読み込みとコンパイル
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        loaders: ["style-loader", "css-loader", "sass-loader"]  // ローダー名
      },
      // TypeScriptファイルの読み込みとコンパイル
      {
        test: /\.ts/, // 対象となるファイルの拡張子
        loaders: ["ts-loader"]  // ローダー名
      }
    ]
  }
}
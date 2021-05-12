module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.ts",
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 拡張子 .ts の場合
        test: /\.(ts|js)$/,
        use: [
          {
            // Babel を利用する
            loader: "babel-loader",
            // Babel のオプションを指定する
            options: {
              presets: [
                // プリセットを指定することで、ES2020 を ES5 に変換
                "@babel/preset-env",
                // TypeScript をコンパイルする
                "@babel/preset-typescript",
              ],
            },
          },
        ],
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};

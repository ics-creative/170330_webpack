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
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"],
    alias: {
      // Three.jsでmodules版を使うとIE11で構文エラーが発生するので、
      // あえて、レガシーなバージョンを利用する
      three: "three/build/three.js",
    },
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};

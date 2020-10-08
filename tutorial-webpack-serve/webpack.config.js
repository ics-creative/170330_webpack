module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",

  entry: "./src/index.js",

  // webpack-serve の設定
  serve: {
    open: true,
    content: "./dist",
  },
};

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false } },
        ],
      },
    ],
  },
};

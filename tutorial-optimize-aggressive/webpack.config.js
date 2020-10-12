module.exports = {
  mode: "production",

  optimization: {
    // production のときは true になる
    // uglify-js がデフォルトで使われる。
    // 別のものを使いたい場合は minimizer を使う
    minimize: true,
  },
};

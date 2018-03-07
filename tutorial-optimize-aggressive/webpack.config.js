module.exports = {

  mode: 'production',

  // webpack 4の最適化は以下の記事が参考になる
  // https://medium.com/webpack/webpack-4-mode-and-optimization-5423a6bc597a
  optimization: {
    // production のときは true になる
    // uglify-js がデフォルトで使われる。
    // 別のものを使いたい場合は minimizer を使う
    minimize: true
  }

};

module.exports = {
  plugins: [
    // ベンダープレフィックスを自動付与する
    require('autoprefixer')(),
    // CSSの余計な空白文字/改行を除去する
    require('cssnano')(),
  ],
};

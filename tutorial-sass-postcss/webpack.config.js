module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",
  // source-map 方式でないと、CSSの元ソースが追跡できないため
  devtool: "source-map",
  module: {
    rules: [
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        // Sassファイルの読み込みとコンパイル
        use: [
          // linkタグに出力する機能
          "style-loader",
          // CSSをバンドルするための機能
          {
            loader: "css-loader",
            options: {
              // CSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップの利用有無
              sourceMap: true,
              // Sass+PostCSSの場合は2を指定
              importLoaders: 2,
            },
          },
          // PostCSSのための設定
          {
            loader: "postcss-loader",
            options: {
              // PostCSS側でもソースマップを有効にする
              // sourceMap: true,
              postcssOptions: {
                plugins: [
                  // Autoprefixerを有効化
                  // ベンダープレフィックスを自動付与する
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          // Sassをバンドルするための機能
          {
            loader: "sass-loader",
            options: {
              // ソースマップの利用有無
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};

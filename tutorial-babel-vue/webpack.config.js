const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "production",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },

      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.js$/,
        loader: "babel-loader",
        // Babel のオプションを指定する
        options: {
          presets: [
            // プリセットを指定することで、ES5 に変換
            "@babel/preset-env",
          ],
        },
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: 'vue/dist/vue.runtime.esm-bundler.js',
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
  ],
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};

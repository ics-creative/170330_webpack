const webpack = require('webpack');

module.exports = {

  mode: "production",

  plugins: [
    // 【効果：中】Scope Hoistingをするためのプラグイン
    new webpack.optimize.ModuleConcatenationPlugin(),
    // 【効果：小】モジュールとチャンクのIDを使用(出現)頻度で割り当て、
    // 頻繁に使用されるIDに、より低い（より短い）IDを割り当てる事で、
    // 予測可能なIDの作成と、合計ファイルサイズを縮小することができるようになるプラグイン
    new webpack.optimize.OccurrenceOrderPlugin(),
    // 【効果：小】既に十分に圧縮されている場合にも詳細にコードを分析し共通化できそうな箇所は
    // まとめてより積極的にコードを圧縮するためのプラグイン
    new webpack.optimize.AggressiveMergingPlugin(),
  ]
};

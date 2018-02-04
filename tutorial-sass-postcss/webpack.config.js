module.exports = {
  entry: './src/main.js',
  output: { // ファイルの出力設定
    path: `${__dirname}/build`,  //  出力ファイルのディレクトリ名
    filename: 'bundle.js'  // 出力ファイル名
  },
  module: {
    rules: [
      {
        // 対象となるファイルの拡張子
        test: /\.scss/,
        // Sassファイルの読み込みとコンパイル
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              // ソースマップを有効にする
              sourceMap: true,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              // PostCSS側でもソースマップを有効にする
              sourceMap: true,
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
};
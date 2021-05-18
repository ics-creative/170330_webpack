# webpack + SCSS with mini-css-extract-pluginのサンプル

Sass(SCSSファイル)をwebpackで取り込みつつ、cssファイルとして出力するサンプルです。

[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)の使い方を紹介します。

※以前は、[extract\-text\-webpack\-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)の使い方を紹介していましたが、2019年8月現在、
非推奨となっているので、mini-css-extract-pluginを使う方式へメンテナンスしました。

## ゼロから環境構築する場合の手順

### インストールコマンド

まずはpackage.jsonを作る。

```bash
npm init -y
```

その上で、必要なモジュールをインストールする。

```bash
npm i -D webpack webpack-cli css-loader sass sass-loader mini-css-extract-plugin
```

### webpack.config.js の書き方

[webpack.config.js](webpack.config.js)のコードを参照ください。

webpackのデフォルト構成としているので、`src`フォルダーにソースファイルを格納すること。デフォルトではエントリーポイントは`src/index.js`である。

### ビルドコマンド

```bash
npm run build
```

`dist`フォルダーに成果物が出力されます。


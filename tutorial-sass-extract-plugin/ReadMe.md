# WebPack + SCSS with extract-text-webpack-pluginのサンプル

Sass(SCSSファイル)をwebpackで取り込みつつ、cssファイルとして出力するサンプルです。
[extract\-text\-webpack\-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)の使い方を紹介します。

## ゼロから環境構築する場合の手順

### インストールコマンド

まずはpackage.jsonを作る。

```bash
npm init -y
```

その上で、必要なモジュールをインストールする。

```bash
npm i -D webpack webpack-cli css-loader node-sass sass-loader extract-text-webpack-plugin
```

### webpack.config.js の書き方

[webpack.config.js](webpack.config.js)のコードを参照ください。

webpackのデフォルト構成としているので、`src`フォルダーにソースファイルを格納すること。デフォルトではエントリーポイントは`src/index.js`である。

### ビルドコマンド

```bash
npx webpack
```

`dist`フォルダーに成果物が出力されます。


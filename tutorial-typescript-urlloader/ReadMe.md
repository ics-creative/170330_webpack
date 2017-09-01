# Webpackチュートリアル

Webpack + TypeScript + url-loader のサンプルです。

JavaScript内でurl-loaderを使って、画像ファイルをBase64文字列として扱う場合、少し工夫が必要です。

```ts
///<reference path="./definitions.d.ts" />

import * as myImage from './images/bg.jpg';

const img = document.createElement('img');

img.src = myImage;

document.body.appendChild(img);

```

## ポイント

- url-loader をインストールする
- webpack.config.js に url-loader のルールを追加
- TypeScript側では画像用の定義ファイルを用意
- import 文は `import * as 任意の名前 from 画像パス` にする

最小構成としてビルドするサンプルを用意しました。
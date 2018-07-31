# Webpackチュートリアル

Webpack + TypeScript + url-loader のサンプルです。

JavaScript内でurl-loaderを使って、画像ファイルをBase64文字列として扱う場合、少し工夫が必要です。

```ts
// import文を解決する
import * as myImage from './images/bg.jpg';

// img要素を生成
const img = document.createElement('img');

// Base64の画像を代入
img.src = myImage;

// 画面に表示する
document.body.appendChild(img);
```

## ポイント

- url-loader をインストールする
- webpack.config.js に url-loader のルールを追加
- TypeScript側では画像用の定義ファイルを用意する。[definitions.d.ts](src/definitions.d.ts)を参照
- import 文は `import * as 任意の名前 from 画像パス` にする

最小構成としてビルドするサンプルを用意しました。
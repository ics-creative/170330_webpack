# webpack-dev-server のサンプル

ICS MEDIA「[最新版で学ぶwebpack入門](https://ics.media/entry/12140/)」で紹介している webpack-dev-server の解説用サンプルです。

## 使い方

インストール

```bash
npm i -D webpack webpack-cli webpack-dev-server
```

webpack.config.jsの設定ファイル

```js
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: 'development',

  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    static: 'dist',
    open: true
  }
};
```

実行

```bash
npx webpack serve
```


詳しくは[記事の説明](https://ics.media/entry/12140/)をご確認ください。

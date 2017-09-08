# TypeScript + RxJS + webpack の構成

RxJSのimportの書き方で容量が変わるので、プロジェクトに応じて使い分けるべき。

次に3通りの例を示す。

## 1. 全部まるっとimport

```ts
import * as Rx from 'rxjs';

Rx.Observable.interval(200)
    .take(9)
    .map(x => x + '!!!')
    .bufferCount(2)
    .subscribe(value => console.log(value));
```

結果、730KB。RxJS全部が出力ファイルに格納される。

## 2. Observable だけimport

```ts
import {Observable} from 'rxjs';

Observable.interval(200)
    .take(9)
    .map(x => x + '!!!')
    .bufferCount(2)
    .subscribe(value => console.log(value));
```

結果、730KB。RxJS全部が出力ファイルに格納される。
`Rx`という接頭語を書く必要が無くなる。

## 3. 個別import

```ts
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';

Observable.interval(200)
    .take(9)
    .map(x => x + '!!!')
    .bufferCount(2)
    .subscribe(value => console.log(value));
```

結果、74KB。RxJSで使っているものだけが import されるので容量が小さく収まる。

ただし、`import {Observable} from 'rxjs/Observable';` だけだとオペレーターが入らないので個別にオペレーターを含める必要がある。

```ts
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferCount';
```


## 考察(重要)

利便性を考慮すると全部まるっとimportするほうが手間がかからない。しかし、Too Fatな設計を避けるため個別importするほうが望ましい。

補足だが、Angular-CLIで作ったプロジェクトだとtslintによって、import文のブラックリストが定義されている。

```json
"import-blacklist": [
  true,
  "rxjs"
],
```

https://github.com/ics-ikeda/clocmaker.jp-labs/blob/master/tslint.json#L15-L18

これは、`rxjs` とまるっとimportすると容量が膨らむことを示唆しての禁止事項だと思う。

Angular-CLIは**開発環境のお手本がくまなく定義されており学ぶべきものが多い**。

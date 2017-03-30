// require()メソッドの定義
declare function require(string): any;

// require()メソッドを使ってSassファイルを読み込む。
require("./sassStyle.scss");

// TypeScriptの動作チェック
class Main {
	constructor() {
		alert("TypeScriptのコンパイル成功。");
	}
}

new Main();
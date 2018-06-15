export class Hello {

  /** 非同期指定で呼び出します。 */
  async say(message) {

    // ES2017 : async, await の検証
    const numList = [1, 2, 3];
    const numList2 = await Promise.all(numList.map(id => id * 2));
    console.log(numList2); // [2, 4, 6]

    // ES2017 : String.prototype.padEnd() の検証
    const str = 'moja';
    console.log(str.padEnd(10, 'hoge')); // mojahogeho
    console.log(str.padEnd(5, 'piyo')); // mojap

    // ES2016 : Array.include の検証
    const arr = ['hoge', 'fuga', 'piyo'];
    console.log(arr.includes('hoge')); // true
    console.log(arr.includes('moja')); // false

    // ES2016 : べき乗の検証
    console.log(3 ** 2); // 9
    console.log(2 ** 8); // 256
    console.log(2 ** 10); // 1024

    // ES2015 : テンプレート構文
    document.body.innerHTML = (`${message}`);
    console.log(`${message}を出力しました`);
  }
}
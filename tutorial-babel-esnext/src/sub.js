export class Hello {
  /** 非同期指定で呼び出します。 */
  async say(message) {
    {
      console.log("💜ES2015 - テンプレート構文");
      console.log(`${message}を出力しました`);
    }

    {
      console.log("💛ES2016 - べき乗の検証");
      console.log(3 ** 2); // 9
      console.log(2 ** 8); // 256
      console.log(2 ** 10); // 1024
    }
    {
      console.log("💛ES2016 - Array.include の検証");
      const arr = ["hoge", "fuga", "piyo"];
      console.log(arr.includes("hoge")); // true
      console.log(arr.includes("moja")); // false
    }

    {
      console.log("💚ES2017 - async, await の検証");

      const numList = [1, 2, 3];
      const numList2 = await Promise.all(numList.map(id => id * 2));
      console.log(numList2); // [2, 4, 6]
    }

    {
      console.log("💚ES2017 - String.prototype.padEnd() の検証");
      const str = "moja";
      console.log(str.padEnd(10, "hoge")); // mojahogeho
      console.log(str.padEnd(5, "piyo")); // mojap
    }

    {
      console.log("💙ES2018 - Asynchronous Iteration");

      // ES2018 : async, await の検証
      const numList = [1, 2, 3];
      for (let i of numList) {
        await new Promise(resolve => {
          console.log(i);
          resolve();
        });
      }

      numList.forEach(async i => {
        await new Promise(resolve => {
          console.log(i);
          resolve();
        });
      });
    }
    {
      console.log("💙ES2018 - Rest/Spread Properties");

      restParam(1, 2, 3, 4, 5);

      function restParam(p1, p2, ...p3) {
        console.log(p1); // 1
        console.log(p2); // 2
        console.log(p3); // [3, 4, 5]
      }
    }
    {
      console.log("💙ES2018 - Regular Expression Named Capture Groups");

      const reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
      const match = reDate.exec("2018-04-30");

      const year = match[1]; // 2018
      const month = match[2]; // 04
      const day = match[3]; // 30

      console.log(year); // 2018
      console.log(month); // 04
      console.log(day); // 30
    }
  }
}

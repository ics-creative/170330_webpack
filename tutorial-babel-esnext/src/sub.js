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
      const numList2 = await Promise.all(numList.map((id) => id * 2));
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
        await new Promise((resolve) => {
          console.log(i);
          resolve();
        });
      }

      numList.forEach(async (i) => {
        await new Promise((resolve) => {
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

    try {
      const instance = new MyClass();
      instance.show();

      console.log("💗️ES2019 - flatの検証");

      console.log([[1, 2], 3, 4].flat()); // 結果：[1, 2, 3, 4]
      console.log(
        ["牛", "豚", "マグロ"].flatMap((food) => [food, `${food}丼`])
      ); // 結果：["牛", "牛丼", "豚", "豚丼", "マグロ", "マグロ丼"]

      console.log("💗️ES2019 - fromEntriesの検証");
      console.log(
        Object.fromEntries([
          ["id", 16],
          ["name", "鈴木"],
        ])
      );

      try {
        throw new Error("🙅");
      } catch {
        // (error)の指定は必須
        console.warn("💗️ES2019 - エラーの省略");
      }
    } catch (error) {
      // IE11向けにはArray#flat()はポリフィルでも利用できない
      // https://github.com/babel/babel/issues/9749#issuecomment-475686062
      // core-js@3を利用する方法も案としてあげられるが、別の問題がつきまとい現実的ではない
      console.log("[NG] ES2019 - flatの検証は利用できませんでした");
    }

    {
      const object = {};
      const fuga = object.hoge?.fuga;
      console.log("💗️ES2020 - オプショナルチェイニング", fuga);
    }

    {
      const num1 = 1_000_000_000; // 10億（1,000,000,000）
      console.log("😊ES2021 - 数値の _ 記号", num1);
    }
    {
      const human = { name: "鈴木" };
      human.name ??= "佐藤";
      // human.name は nullish ではないので、何も代入されない
      human.address ??= "港区";
      // human.address は nullish なので、「港区」が代入される
      // 結果： {name: "鈴木", address: "港区"}
      console.log("😊ES2021 - ??=演算子", human);
    }

    {
      const instance = new MyClass2022();
      console.log(instance.show());
      console.log(MyClass2022.myStaticField);
    }

    {
      const element = ["a", "b", "c", "d", "e"].at(-1); // e
      console.log("🍋ES2022 - .at. last element is " + element);
    }
    {
      const object = { foo: false };
      console.log(
        "🍋ES2022 - .Accessible Object.prototype.hasOwnProperty, " +
          object.hasOwnProperty("foo")
      );
    }

    {
      const result = /EF(GH)(I)J/d.exec("ABCDEFGHIJK");
      console.log("🍋ES2022 - RegExp Match Indices");
      console.table(result.indices);
    }

    {
      const list1 = [1, 2, 3];
      const list2 = list1.toReversed(); // 逆転

      console.log("🍋ES2023 - toReversed()", {list1, list2});
    }
  }
}

class MyClass {
  // hoge = '💗ES2019 - メンバーフィールドの検証';

  constructor() {}

  show() {
    // console.log(this.hoge);
  }
}

class MyClass2022 {
  static myStaticField = "🍋ES2022 - staticフィールドの検査法";
  #privateFiled = "🍋ES2022 - プライベートフィールドの検証";

  constructor() {}

  show() {
    console.log(this.#privateFiled);
  }
  #show() {
    console.log(this.#privateFiled);
  }
}

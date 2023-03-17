export class Hello {
  /** 非同期指定で呼び出します。 */
  async say(message) {
    {
      log("💜ES2015 - テンプレート構文");
      log(`${message}を出力しました`);
    }

    {
      log("💛ES2016 - べき乗の検証");
      log(3 ** 2); // 9
      log(2 ** 8); // 256
      log(2 ** 10); // 1024
    }
    {
      log("💛ES2016 - Array.include の検証");
      const arr = ["hoge", "fuga", "piyo"];
      log(arr.includes("hoge")); // true
      log(arr.includes("moja")); // false
    }

    {
      log("💚ES2017 - async, await の検証");

      const numList = [1, 2, 3];
      const numList2 = await Promise.all(numList.map((id) => id * 2));
      log(numList2); // [2, 4, 6]
    }

    {
      log("💚ES2017 - String.prototype.padEnd() の検証");
      const str = "moja";
      log(str.padEnd(10, "hoge")); // mojahogeho
      log(str.padEnd(5, "piyo")); // mojap
    }

    {
      log("💙ES2018 - Asynchronous Iteration");

      // ES2018 : async, await の検証
      const numList = [1, 2, 3];
      for (let i of numList) {
        await new Promise((resolve) => {
          log(i);
          resolve();
        });
      }

      numList.forEach(async (i) => {
        await new Promise((resolve) => {
          log(i);
          resolve();
        });
      });
    }
    {
      log("💙ES2018 - Rest/Spread Properties");

      restParam(1, 2, 3, 4, 5);

      function restParam(p1, p2, ...p3) {
        log(p1); // 1
        log(p2); // 2
        log(p3); // [3, 4, 5]
      }
    }
    {
      log("💙ES2018 - Regular Expression Named Capture Groups");

      const reDate = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
      const match = reDate.exec("2018-04-30");

      const year = match[1]; // 2018
      const month = match[2]; // 04
      const day = match[3]; // 30

      log(year); // 2018
      log(month); // 04
      log(day); // 30
    }

    try {
      const instance = new MyClass();
      instance.show();

      log("💗️ES2019 - flatの検証");

      log([[1, 2], 3, 4].flat()); // 結果：[1, 2, 3, 4]
      log(
        ["牛", "豚", "マグロ"].flatMap((food) => [food, `${food}丼`])
      ); // 結果：["牛", "牛丼", "豚", "豚丼", "マグロ", "マグロ丼"]

      log("💗️ES2019 - fromEntriesの検証");
      log(
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
      log("[NG] ES2019 - flatの検証は利用できませんでした");
    }

    {
      const object = {};
      const fuga = object.hoge?.fuga;
      log("💗️ES2020 - オプショナルチェイニング", fuga);
    }

    {
      const num1 = 1_000_000_000; // 10億（1,000,000,000）
      log("😊ES2021 - 数値の _ 記号", num1);
    }
    {
      const human = { name: "鈴木" };
      human.name ??= "佐藤";
      // human.name は nullish ではないので、何も代入されない
      human.address ??= "港区";
      // human.address は nullish なので、「港区」が代入される
      // 結果： {name: "鈴木", address: "港区"}
      log("😊ES2021 - ??=演算子", human);
    }

    {
      const instance = new MyClass2022();
      log(instance.show());
      log(MyClass2022.myStaticField);
    }

    {
      const element = ["a", "b", "c", "d", "e"].at(-1); // e
      log("🍋ES2022 - .at. last element is " + element);
    }
    {
      const object = { foo: false };
      log(
        "🍋ES2022 - .Accessible Object.prototype.hasOwnProperty, " +
          object.hasOwnProperty("foo")
      );
    }

    {
      const result = /EF(GH)(I)J/d.exec("ABCDEFGHIJK");
      log("🍋ES2022 - RegExp Match Indices");
      console.table(result.indices);
    }

    {
      const list1 = [1, 2, 3];
      const list2 = list1.toReversed(); // 逆転

      log("🍊ES2023 - toReversed()", {list1, list2});
    }

    {
      const list1 = [3, 1, 2];
      const list2 = list1.toSorted(); // ソート

      log("🍊ES2023 - toSorted()", {list1, list2});
    }
  }
}

class MyClass {
  // hoge = '💗ES2019 - メンバーフィールドの検証';

  constructor() {}

  show() {
    // log(this.hoge);
  }
}

class MyClass2022 {
  static myStaticField = "🍋ES2022 - staticフィールドの検査法";
  #privateFiled = "🍋ES2022 - プライベートフィールドの検証";

  constructor() {}

  show() {
    log(this.#privateFiled);
  }
  #show() {
    log(this.#privateFiled);
  }
}

function log(arg){
  const str = [...arguments].map((arg) => {
    if (typeof arg === "object") {
      return JSON.stringify(arg);
    }
    return arg;
  }).join(", ");
  const element = document.querySelector("#consoleArea");
  element.innerHTML = element.innerHTML + "\n" + str;
}

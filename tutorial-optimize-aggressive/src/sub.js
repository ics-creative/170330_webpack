export function hello() {
  const myString = addStrings("helloメソッド", "実行された。");
  document.body.innerHTML = myString;
  console.log(myString);
}

function addStrings(a, b) {
  return a + "が" + b;
}

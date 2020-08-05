// module.exportを使ってhello関数を定義する。
export const hello = (message) => {
  document.body.innerHTML = `${message}`;
  console.log(`${message}を出力しました`);
};

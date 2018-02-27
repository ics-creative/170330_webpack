// module.exportを使ってhello関数を定義する。
export const hello = (message: string): void => {
  log(message);
};

function log(message: string): void {
  console.log(`${message}を出力しました`);
}

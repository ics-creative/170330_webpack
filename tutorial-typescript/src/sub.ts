// module.exportを使ってhello関数を定義する。
export const hello = (message: string): void => {

  log(message);
};

function log(message: string) :void{
  document.body.innerHTML = (`${message}`);

  console.log(`${message}を出力しました`);
}

export function piyo(){

}

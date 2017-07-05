// module.exportを使ってhello関数を定義する。
module.exports.hello = function () {
  document.body.innerHTML = 'helloメソッドが実行された。';
  console.log('helloメソッドが実行された。');
};
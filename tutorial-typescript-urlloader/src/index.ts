// import文を解決する
import myImage from "./images/bg.jpg";

// img要素を生成
const img = document.createElement("img");

// Base64の画像を代入
img.src = myImage;

// 画面に表示する
document.body.appendChild(img);

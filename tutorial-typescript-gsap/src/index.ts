
// import {TweenLite, TimelineLite, Bounce} from 'gsap'; // 容量がかさむ
import TweenLite from 'gsap/TweenLite'; // 最小構成になる
import TimelineLite from 'gsap/TimelineLite';
import {Bounce} from 'gsap/EasePack';

// 適当に要素をたくさん用意する
const rects = [];
for (let i = 0; i < 50; i++) {
  const rect = document.createElement('div');
  rect.className = 'rect';
  rect.style.left = `calc(100vw * ${Math.random()})`;
  rect.style.top = `-100px`;
  rect.style.transform = `rotateZ(${Math.random() * 360}deg)`;
  document.body.appendChild(rect);
  rects.push(rect);
}

// タイムラインを作成する
const tl = new TimelineLite({repeat: -1, yoyo: true});
rects.forEach((rect, index) => {
  // トゥイーンインスタンスを追加する
  tl.add(TweenLite.to(rect, 3, {
    y        : window.innerHeight * 3 / 4,
    rotationZ: 0,
    ease     : Bounce.easeOut,
    delay    : index * 0.02
  }), 0);
});


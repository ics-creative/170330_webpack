import gsap, {Bounce} from 'gsap';

// 適当に要素をたくさん用意する
const rects = [];
for (let i = 0; i < 50; i++) {
  const rect = document.createElement('div');
  rect.className = 'rect';
  rect.style.left = `calc(100vw * ${Math.random()})`;
  rect.style.top = `-100px`;
  rect.style.transform = `rotate(${Math.random() * 360}deg)`;
  document.body.appendChild(rect);
  rects.push(rect);
}

// タイムラインを作成する
const tl = gsap.timeline({repeat: -1, repeatDelay: 1});
rects.forEach((rect, index) => {
  // トゥイーンインスタンスを追加する
  tl.add(gsap.to(rect, 3, {
    y: window.innerHeight * 3 / 4,
    rotate: 0,
    ease: Bounce.easeOut,
    delay: index * 0.02,
  }), 0);
});


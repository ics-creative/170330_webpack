import { gsap, Bounce } from "gsap";

// 個数
const MAX = 50;

// 適当に要素をたくさん用意する
const rects = [];
for (let i = 0; i < MAX; i++) {
  const rect = document.createElement("div");
  rect.className = "rect";
  rect.style.width = `calc(100vw * ${1 / MAX})`;
  rect.style.height = `calc(100vw * ${1 / MAX})`;
  rect.style.left = `calc(100vw * ${i / MAX})`;
  rect.style.top = `-100px`;
  document.body.appendChild(rect);
  rects.push(rect);
}

// タイムラインを作成する
const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
rects.forEach((rect, index) => {
  // トゥイーンインスタンスを追加する
  tl.add(
    gsap.to(rect, {
      duration: 3,
      y: (window.innerHeight * 3) / 4,
      ease: Bounce.easeOut,
      delay: Math.random(),
    }),
    0
  );
});

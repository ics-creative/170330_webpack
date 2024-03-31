import * as PIXI from "pixi.js";

const app = new PIXI.Application();
await app.init({ background: 'black', resizeTo: window });
document.body.appendChild(app.canvas);

const bunny = new PIXI.Graphics();
bunny.rect(0, 0, 128, 128);
bunny.fill(0xff0000);

bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

bunny.pivot.x = 64;
bunny.pivot.y = 64;

app.stage.addChild(bunny);

app.ticker.add(() => {
  bunny.rotation += 0.01;
});

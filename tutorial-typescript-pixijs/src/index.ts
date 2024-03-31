import { Application, Graphics } from "pixi.js";

const app = new Application();

await app.init({ background: 'black', resizeTo: window });

document.body.appendChild(app.canvas);

const bunny = new Graphics();
bunny.rect(0, 0, 128, 128);
bunny.fill(0x00ff00);

bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

bunny.pivot.x = 64;
bunny.pivot.y = 64;

app.stage.addChild(bunny);

app.ticker.add(() => {
  bunny.rotation += 0.01;
});

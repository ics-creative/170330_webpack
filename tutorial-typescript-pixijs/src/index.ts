import { Application, Graphics } from "pixi.js";

const app = new Application();

document.body.appendChild(app.view);

const bunny = new Graphics();
bunny.beginFill(0xff0000);
bunny.drawRect(0, 0, 128, 128);

bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

bunny.pivot.x = 64;
bunny.pivot.y = 64;

app.stage.addChild(bunny);

app.ticker.add(() => {
  bunny.rotation += 0.01;
});

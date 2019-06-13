import {Application, Graphics} from 'pixi.js/lib/pixi.es.js';

const app = new Application();

document.body.appendChild(app.view);

const bunny = new Graphics();
bunny.graphics.beginFill(0xFF0000);
bunny.graphics.drawRect(0, 0, 10, 10);

bunny.x = app.renderer.width / 2;
bunny.y = app.renderer.height / 2;

bunny.anchor.x = 0.5;
bunny.anchor.y = 0.5;

app.stage.addChild(bunny);

app.ticker.add(() => {
  bunny.rotation += 0.01;
});

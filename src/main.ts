import staw from "./canvas/straw";
import config from "./config";
import "./style.scss";
import "./service/image";
import { promises } from "./service/image";
import wall from "./canvas/wall";
import water from "./canvas/water";
import steel from "./canvas/steel";
import tank from "./canvas/tank";
import bullet from "./canvas/bullet";
import boss from "./canvas/boss";
import player from "./canvas/player";

const app = document.querySelector<HTMLDivElement>("#app")!;
app.style.width = config.canvas.width + "px";
app.style.height = config.canvas.height + "px";

async function bootstrap() {
  await Promise.all(promises);

  staw.render();
  wall.render();
  water.render();
  steel.render();
  tank.render();
  bullet.render();
  boss.render();
  player.render();
}
void bootstrap();

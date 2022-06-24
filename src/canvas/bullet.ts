// import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/bullet";
import tank from "./tank";
import bullet from "../model/bullet";
import player from "./player";

export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return 0;
  }
  model(): BulletModelConstructor {
    return model;
  }
  render(): void {
    // super.createModels();
    // super.rendModels();
    setInterval(() => {
      this.createBullet();
      this.renderModels();
    }, 35);
  }
  createBullet() {
    tank.models.forEach((tank) => {
      const isExists = this.models.some((m) => m.tank == tank);
      if (!isExists) {
        this.models.push(new bullet(tank));
      }
    });
  }

  addPlayerBullet() {
    this.models.push(new bullet(player.models[0]));
  }
})("bullet");

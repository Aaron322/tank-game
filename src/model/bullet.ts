import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import bullet from "../canvas/bullet";
import config from "../config";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import boss from "../canvas/boss";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = bullet;
  name: string = "bullet";
  constructor(public tank: IModel) {
    super(tank.x + config.model.width / 2, tank.y + config.model.height / 2);
    this.direction = tank.direction as unknown as directionEnum;
  }

  static models: any;
  image(): HTMLImageElement {
    return image.get("bullet")!;
  }
  render(): void {
    // super.draw();
    let x = this.x;
    let y = this.y;
    switch (this.direction) {
      case directionEnum.top:
        y -= 5;
        break;
      case directionEnum.right:
        x += 5;
        break;
      case directionEnum.bottom:
        y += 5;
        break;
      case directionEnum.left:
        x -= 5;
        break;
    }
    //碰撞检测
    const touchModel = util.isModelTouch(x, y, 2, 2, [
      ...wall.models,
      ...steel.models,
      ...boss.models,
    ]);
    if (util.isCanvasTouch(x, y, 2, 2)) {
      this.destory();
    } else if (touchModel) {
      this.destory();
      if (touchModel.name != "steel") touchModel.destory();
      this.blast(touchModel);
    } else {
      this.x = x;
      this.y = y;
      this.draw();
    }
  }

  protected draw() {
    this.canvas.ctx.drawImage(this.image(), this.x, this.y, 2, 2);
  }
}

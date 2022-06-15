import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import { directionEnum } from "../enum/directionEnum";
import _ from "lodash";
import config from "../config";
// import water from "../canvas/water";
// import wall from "../canvas/wall";
// import steel from "../canvas/steel";
import tank from "../canvas/tank";
import util from "../util";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = tank;
  name: string = "tank";
  render(): void {
    // this.randomDirection();
    // this.draw();
    this.move();

    // 增加碰撞后向下走的概率
    // if (_.random(20) == 1) {
    //   this.direction = directionEnum.bottom;
    // }
  }

  image() {
    let direction = this.name + _.upperFirst(this.direction);
    return image.get(direction as keyof typeof config.images)!;
  }

  protected move(): void {
    while (true) {
      let x = this.x;
      let y = this.y;
      switch (this.direction) {
        case directionEnum.top:
          y--;
          break;
        case directionEnum.bottom:
          y++;
          break;
        case directionEnum.left:
          x--;
          break;
        case directionEnum.right:
          x++;
          break;
      }
      if (util.isModelTouch(x, y) || util.isCanvasTouch(x, y)) {
        this.randomDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw();
  }
}

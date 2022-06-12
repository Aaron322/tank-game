import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import { directionEnum } from "../enum/directionEnum";
import _ from "lodash";
import config from "../config";
import water from "../canvas/water";
import wall from "../canvas/wall";
import steel from "../canvas/steel";
import tank from "../canvas/tank";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = tank;
  name: string = "tank";
  render(): void {
    // this.randomDirection();
    // this.draw();
    this.move();

    //增加碰撞后向下走的概率
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
      if (this.isTouch(x, y) === true) {
        this.randomDirection();
      } else {
        this.x = x;
        this.y = y;
        break;
      }
    }
    super.draw();
  }

  //碰撞检测
  //边缘碰撞
  protected isTouch(x: number, y: number): boolean {
    if (
      x < 0 ||
      x + this.width > config.canvas.width ||
      y < 0 ||
      y + this.height > config.canvas.height
    ) {
      // //增加碰撞后向下走的概率
      // if (_.random(20) == 1) {
      //   this.direction = directionEnum.bottom;
      // }
      return true;
    }

    //模型碰撞
    const models = [...water.models, ...wall.models, ...steel.models];
    return models.some((model) => {
      const state =
        x + this.width <= model.x ||
        x >= model.x + model.width ||
        y + this.height <= model.y ||
        y >= model.y + model.height;

      return !state;
    });
  }
}

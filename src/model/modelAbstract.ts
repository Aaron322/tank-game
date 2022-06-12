import config from "../config";
import { directionEnum } from "../enum/directionEnum";

export default abstract class modelAbstract {
  abstract render(): void;
  abstract name: string;
  abstract canvas: ICanvas;
  abstract image(): HTMLImageElement;
  protected direction: directionEnum = directionEnum.top;
  public width = config.model.width;
  public height = config.model.height;

  constructor(public x: number, public y: number) {
    this.randomDirection();
  }

  //随机产生方向
  protected randomDirection() {
    this.direction = Object.keys(directionEnum)[
      Math.floor(Math.random() * 4)
    ] as directionEnum;
  }

  protected draw() {
    this.canvas.ctx.drawImage(
      this.image(),
      this.x,
      this.y,
      config.model.width,
      config.model.height
    );
  }

  // //判断是否碰撞
  // protected isTouch(x: number, y: number): boolean {
  //   if (
  //     x < 0 ||
  //     x + this.width > config.canvas.width ||
  //     y < 0 ||
  //     y + this.height > config.canvas.height
  //   ) {
  //     return true;
  //   }
  //   const models = [...water.models, ...wall.models, ...steel.models];
  //   return models.some((model) => {
  //     const state =
  //       x + this.width <= model.x ||
  //       x >= model.x + model.width ||
  //       y + this.height <= model.y ||
  //       y >= model.y + model.height;

  //     return !state;
  //   });
  // }
}

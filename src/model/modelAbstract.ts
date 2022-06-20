import config from "../config";
import { directionEnum } from "../enum/directionEnum";

export default abstract class modelAbstract {
  abstract render(): void;
  abstract name: string;
  abstract canvas: ICanvas;
  abstract image(): HTMLImageElement;
  public direction: directionEnum = directionEnum.top;
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

  public destory() {
    this.canvas.removeModel(this);
    this.canvas.renderModels();
  }

  protected blast(model: IModel) {
    Array(...Array(8).keys()).reduce((promise, index) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const img = new Image();
          img.src = `/src/static/images/blasts/blast${index}.gif`;
          img.onload = () => {
            this.canvas.ctx.drawImage(
              img,
              model.x,
              model.y,
              model.width,
              model.height
            );
            resolve(promise);
          };
        }, 50);
      });
    }, Promise.resolve());
  }
}

import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import player from "../canvas/player";
import _ from "lodash";
import { directionEnum } from "../enum/directionEnum";
import util from "../util";
import bullet from "../canvas/bullet";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = player;
  name: string = "player";
  bindEvent = false;
  static models: any;
  image(): HTMLImageElement {
    let direction = this.name + _.upperFirst(this.direction);
    return image.get(direction as any)!;
  }
  render(): void {
    super.draw();
    if (this.bindEvent === false) {
      this.bindEvent = true;
      document.addEventListener("keydown", this.changeDirection.bind(this));
      document.addEventListener("keydown", this.move.bind(this));
      document.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.code === "Space") bullet.addPlayerBullet();
      });
    }
  }
  changeDirection(event: KeyboardEvent) {
    console.log(event.code);
    switch (event.code) {
      case "ArrowDown":
        this.direction = directionEnum.bottom;
        break;
      case "ArrowUp":
        this.direction = directionEnum.top;
        break;
      case "ArrowLeft":
        this.direction = directionEnum.left;
        break;
      case "ArrowRight":
        this.direction = directionEnum.right;
        break;
    }
  }

  move(event: KeyboardEvent) {
    let x = this.x;
    let y = this.y;
    switch (event.code) {
      case "ArrowDown":
        y += 10;
        break;
      case "ArrowUp":
        y -= 10;
        break;
      case "ArrowLeft":
        x -= 10;
        break;
      case "ArrowRight":
        x += 10;
        break;
    }
    if (util.isCanvasTouch(x, y) || util.isModelTouch(x, y)) {
      return;
    }
    this.x = x;
    this.y = y;
    this.canvas.renderModels();
  }
}

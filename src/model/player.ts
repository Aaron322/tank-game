import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import player from "../canvas/player";
import _ from "lodash";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = player;
  name: string = "player";
  static models: any;
  image(): HTMLImageElement {
    let direction = this.name + "-" + _.upperFirst(this.direction);
    return image.get(direction as any)!;
  }
  render(): void {
    super.draw();
  }
}

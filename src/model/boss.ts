import modelAbstract from "./modelAbstract";
import { image } from "../service/image";
import boss from "../canvas/boss";

export default class extends modelAbstract implements IModel {
  canvas: ICanvas = boss;
  name: string = "boss";
  static models: any;
  image(): HTMLImageElement {
    return image.get("boss")!;
  }
  render(): void {
    super.draw();
  }
}

import modelAbstract from "./modelAbstract";
import { image } from "../service/image";

export default class extends modelAbstract implements IModel {
  name: string = "wall";
  image(): HTMLImageElement {
    return image.get("wall")!;
  }
  render(): void {
    super.draw();
  }
}

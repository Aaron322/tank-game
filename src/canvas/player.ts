import canvasAbstract from "./canvasAbstract";
import model from "../model/player";

export default new (class extends canvasAbstract implements ICanvas {
  num(): number {
    return 10;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    super.createModels();
    super.renderModels();
  }
})("player");

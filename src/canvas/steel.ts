import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/steel";

class steel extends canvasAbstract implements ICanvas {
  num(): number {
    return config.steel.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    super.createModels();
    super.rendModels();
  }
}

export default new steel();

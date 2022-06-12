import config from "../config";
import canvasAbstract from "./canvasAbstract";
import model from "../model/tank";
import position from "../service/position";
2;
class tank extends canvasAbstract implements ICanvas {
  num(): number {
    return config.tank.num;
  }
  model(): ModelConstructor {
    return model;
  }
  render(): void {
    this.createModels();
    this.rendModels();

    setInterval(() => {
      this.rendModels();
    }, config.tankSpeed);
  }

  //渲染模型到画布上
  protected rendModels() {
    this.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);

    super.rendModels();
    // this.models.forEach((model) => {
    //   model.render();
    //   this.canvas.drawImage(
    //     model.image(),
    //     model.x,
    //     model.y,
    //     config.model.width,
    //     config.model.height
    //   );
    // });
  }

  //生成模型实例
  protected createModels() {
    for (let i = 0; i < this.num(); i++) {
      const pos = position.position();
      const model = this.model();
      const instance = new model(pos.x, 0);
      this.models.push(instance);
    }
  }
}

export default new tank();

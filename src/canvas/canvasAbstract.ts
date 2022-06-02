import config from "../config";
import position from "../service/position";

export default abstract class canvasAbstract {
  public models: IModel[] = [];
  abstract render(): void;
  abstract num(): number;
  abstract model(): ModelConstructor;
  constructor(
    protected app = document.querySelector("#app") as HTMLDivElement,
    protected el = document.createElement("canvas"),
    protected canvas = el.getContext("2d")!
  ) {
    this.createCanvas();
  }

  //创建画布
  protected createCanvas() {
    this.el.width = config.canvas.width;
    this.el.height = config.canvas.height;

    this.app.insertAdjacentElement("afterbegin", this.el);
  }

  //生成模型实例
  protected createModels() {
    position.getCollection(this.num()).forEach((position) => {
      const model = this.model();
      const instance = new model(this.canvas, position.x, position.y);
      this.models.push(instance);
    });
  }

  //渲染模型到画布上
  protected rendModels() {
    this.models.forEach((model) => model.render());
  }
}
import config from "./config";
import steel from "./canvas/steel";
import wall from "./canvas/wall";
// import water from "./canvas/water";

export default {
  isCanvasTouch(
    x: number,
    y: number,
    width = config.model.width,
    height = config.model.height
  ): boolean {
    return (
      x < 0 ||
      x + width > config.canvas.width ||
      y < 0 ||
      y + height > config.canvas.height
    );
  },
  isModelTouch(
    x: number,
    y: number,
    width = config.model.width,
    height = config.model.height,
    models = [...wall.models, ...steel.models]
  ): IModel | undefined {
    //模型碰撞
    return models.find((model) => {
      const state =
        x + width <= model.x ||
        x >= model.x + model.width ||
        y + height <= model.y ||
        y >= model.y + model.height;

      return !state;
    });
  },
};

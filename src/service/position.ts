import config from "../config";

type positionType = { x: number; y: number };
class position {
  collection: positionType[] = [];
  //批量获取唯一坐标，不会重叠
  public getCollection(num: number) {
    const collection = [] as { x: number; y: number }[];
    for (let i = 0; i < num; i++) {
      while (true) {
        const position = this.position();
        const exists = this.collection.some(
          (c) => c.x == position.x && c.y == position.y
        );
        if (!exists) {
          collection.push(position);
          this.collection.push(position);
          break;
        }
      }
    }
    return collection;
  }

  //获取随机坐标
  public position() {
    return {
      x:
        Math.floor(Math.random() * (config.canvas.width / config.model.width)) *
        config.model.width,
      y:
        Math.floor(
          Math.random() * (config.canvas.height / config.model.height - 6)
        ) *
          config.model.height +
        config.model.height * 2,
    };
  }
}

export default new position();

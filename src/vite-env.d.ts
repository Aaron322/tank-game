/// <reference types="vite/client" />

interface ModelConstructor {
  new (x: number, y: number): IModel;
}

interface BulletModelConstructor {
  new (tank: IModel): IModel;
}

interface IModel {
  name: string;
  render(): void;
  x: number;
  y: number;
  tank?: IModel;
  width: number;
  height: number;
  // image(): HTMLImageElement;
  direction: string;
  destory(): void;
}

interface ICanvas {
  model(): ModelConstructor | BulletModelConstructor;
  num(): number;
  ctx: CanvasRenderingContext2D;
  removeModel(model: IModel): void;
  renderModels(): void;
}

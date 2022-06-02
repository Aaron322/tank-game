/// <reference types="vite/client" />

interface ModelConstructor {
  new (canvas: CanvasRenderingContext2D, x: number, y: number): any;
}

interface IModel {
  render(): void;
  x: number;
  y: number;
  width: number;
  height: number;
  image(): HTMLImageElement;
}

interface ICanvas {
  model(): ModelConstructor;
  num(): number;
}

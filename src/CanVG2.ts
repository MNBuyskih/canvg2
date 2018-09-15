import {AbstractElements} from "src/elements/AbstractElements";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {ICanvgOptions} from "src/types/ICanvgOptions";

export class CanVG2 {
  rootElement: AbstractElements;
  context: CanvasRenderingContext2D;
  options: ICanvgOptions = {
    clearCanvas: false,
  };
  private canvas: HTMLCanvasElement;
  private source: HTMLElement;

  constructor(canvas: HTMLCanvasElement, svg: HTMLElement, options?: ICanvgOptions) {
    this.canvas = canvas;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Can`t get context from target");
    }

    this.context = context;
    this.source = svg;
    this.options = {...this.options, ...options};

    this.rootElement = ElementsFactory.create(this.source, true);
  }

  draw() {
    if (this.options.clearCanvas) {
      this.clearContext();
    }

    this.rootElement.draw(this);
  }

  private clearContext() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

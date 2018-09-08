import {ElementsSvg} from "./elements/ElementsSvg";

export class CanVG2 {
  private canvas: HTMLCanvasElement;
  private svg: XMLDocument;
  private rootElement: ElementsSvg;
  private context: CanvasRenderingContext2D;

  constructor(canvas: HTMLCanvasElement, svg: XMLDocument) {
    this.canvas = canvas;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Can`t get context from target");
    }

    this.context = context;
    this.svg = svg;

    this.parseXml();
  }

  draw() {
    this.rootElement.render(this.context);
  }

  private parseXml() {
    this.rootElement = this.createElement(this.svg.documentElement);
  }

  private createElement(element: HTMLElement) {
    return new ElementsSvg(element);
  }
}

import {AbstractElements} from "elements/AbstractElements";
import {ElementsFactory} from "ElementsFactory";

export class CanVG2 {
  rootElement: AbstractElements;
  context: CanvasRenderingContext2D;
  private canvas: HTMLCanvasElement;
  private source: XMLDocument;

  constructor(canvas: HTMLCanvasElement, svg: XMLDocument) {
    this.canvas = canvas;
    const context = this.canvas.getContext("2d");
    if (!context) {
      throw new Error("Can`t get context from target");
    }

    this.context = context;
    this.source = svg;

    this.parseXml();
  }

  draw() {
    // this.rootElement.render(this.context);
  }

  private parseXml() {
    this.rootElement = ElementsFactory.create(this.source.documentElement);
    this.rootElement.root = true;
  }

}

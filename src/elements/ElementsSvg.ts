import {AbstractElements} from "src/elements/AbstractElements";

export class ElementsSvg extends AbstractElements {
  render(context: CanvasRenderingContext2D): void {
    this.children.forEach(c => c.render(context));
  }
}

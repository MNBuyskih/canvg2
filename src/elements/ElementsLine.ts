import {AbstractElements} from "src/elements/AbstractElements";

export class ElementsLine extends AbstractElements {
  render(context: CanvasRenderingContext2D): void {
    const [x1, y1, x2, y2] = [this.attributes.x1, this.attributes.y1, this.attributes.x2, this.attributes.y2]
      .map(val => val && val.value.value || 0);

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();
  }
}

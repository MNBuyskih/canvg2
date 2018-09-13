import {CanVG2} from "src/CanVG2";
import {AbstractElements} from "src/elements/AbstractElements";

export class ElementsLine extends AbstractElements {
  render(canvg: CanVG2): void {
    const [x1, y1, x2, y2] = [this.attributes.x1, this.attributes.y1, this.attributes.x2, this.attributes.y2]
      .map(val => val && val.value.value || 0);

    canvg.context.beginPath();
    canvg.context.moveTo(x1, y1);
    canvg.context.lineTo(x2, y2);
    canvg.context.stroke();
  }
}

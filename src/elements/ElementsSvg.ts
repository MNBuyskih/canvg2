import {CanVG2} from "src/CanVG2";
import {AbstractElements} from "src/elements/AbstractElements";

export class ElementsSvg extends AbstractElements {
  render(canvg: CanVG2): void {
    this.children.forEach(c => c.draw(canvg));
  }
}

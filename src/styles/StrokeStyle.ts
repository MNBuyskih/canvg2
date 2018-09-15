import {CanVG2} from "src/CanVG2";
import {PaintProperty} from "src/property/PaintProperty";
import {RGBA} from "src/property/RGBA";
import {UrlProperty} from "src/property/UrlProperty";
import {AbstractStyle} from "src/styles/AbstractStyle";

export class StrokeStyle extends AbstractStyle {
  private __value: PaintProperty;

  get value(): PaintProperty {
    return this.__value || (this.__value = new PaintProperty(this._value));
  }

  beforeRender(canvg: CanVG2): void {
    const value = this.value.value;
    if (!value) {
      return;
    }

    if (value === "none") {
      canvg.context.strokeStyle = "transparent";
    } else if (typeof value == "string") {
      canvg.context.strokeStyle = value;
    } else if (value instanceof UrlProperty) {
      // canvg.context.strokeStyle = value;
    } else if (value instanceof RGBA) {
      canvg.context.strokeStyle = value.color;
    }
  }
}

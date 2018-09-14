import {PaintProperty} from "src/property/PaintProperty";
import {AbstractStyle} from "src/styles/AbstractStyle";

export class StrokeStyle extends AbstractStyle {
  private __value: PaintProperty;

  get value(): PaintProperty {
    return this.__value || (this.__value = new PaintProperty(this._value));
  }
}

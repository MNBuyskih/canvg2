import {CanVG2} from "src/CanVG2";
import {Property} from "src/property/Property";

export abstract class AbstractStyle {
  value: Property;
  protected _value: string;

  constructor(value: string) {
    this._value = value;
  }

  afterRender(canvg: CanVG2): void {
  }

  beforeRender(canvg: CanVG2): void {
  }
}

import {Property} from "property/Property";
import {RGBA} from "property/RGBA";

export class ColorProperty extends Property {
  private _parsedValue: RGBA;

  get value(): RGBA {
    return this.parsedValue();
  }

  private parsedValue() {
    if (this._parsedValue) {
      return this._parsedValue;
    }

    return this._parsedValue = new RGBA(this._value || "black");
  }
}

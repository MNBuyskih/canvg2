import {Property} from "property/Property";

export class NumberProperty extends Property {
  private _parsedValue: number;

  get value(): number {
    return this.parsedValue();
  }

  private parsedValue(): number {
    if (!this._parsedValue) {
      this._parsedValue = parseFloat(this._value);
      if (!this._parsedValue) {
        this._parsedValue = 0;
      }
    }

    return this._parsedValue;
  }
}

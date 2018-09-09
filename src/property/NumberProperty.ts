import {Property} from "property/Property";

export class NumberProperty extends Property {
  private _parsedValue: number;
  private _units: string | null;

  get units(): string | null {
    // extract units from value first
    this.parsedValue();
    return this._units;
  }

  get value(): number {
    return this.parsedValue();
  }

  protected extractUnits(): string {
    const value = this._value.toString().trim();

    if (/^\d+(:?\.\d+)*$/.test(value)) {
      // no units in value
      this._units = null;
      return value;
    }

    if (/%$/.test(value)) {
      this._units = "%";
      return value.substr(0, value.length - 1);
    }

    if (/(em|ex|px|pt|pc|cm|mm|in)$/.test(value)) {
      this._units = value.substr(-2);
      return value.substr(0, value.length - 2);
    }

    this._units = null;
    return value;
  }

  private parsedValue(): number {
    if (!this._parsedValue) {
      if (this._value === null) {
        this._parsedValue = 0;
      } else {
        const value = this.extractUnits();
        this._parsedValue = parseFloat(value);
        if (!this._parsedValue) {
          this._parsedValue = 0;
        }
      }
    }

    return this._parsedValue;
  }
}

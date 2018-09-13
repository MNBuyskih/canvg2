import {Property} from "src/property/Property";

export class ListOfNumbersProperty extends Property {
  get value(): number[] {
    return this.parsedValue;
  }

  private _parsedValue: number[];

  private get parsedValue(): number[] {
    if (!this._parsedValue) {
      if (this._value === null) {
        this._parsedValue = [];
      } else {
        this._parsedValue = this._value
          .toString()
          .trim()
          .replace(/\s+/g, " ")
          .split(" ")
          .filter(c => c != "")
          .map(parseFloat);
      }
    }

    return this._parsedValue;
  }

  toString(): string {
    return this.parsedValue.join(" ");
  }
}

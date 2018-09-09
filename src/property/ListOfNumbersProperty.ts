import {Property} from "./Property";

export class ListOfNumbersProperty extends Property {
  private _parsedValue: number[];

  get value(): number[] {
    return this.parsedValue;
  }

  private get parsedValue(): number[] {
    if (!this._parsedValue) {
      this._parsedValue = this._value
        .replace(/\s+/g, " ")
        .split(" ")
        .map(parseFloat);
    }

    return this._parsedValue;
  }

  toString(): string {
    return this.parsedValue.join(" ");
  }
}

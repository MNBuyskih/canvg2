import {Property} from "src/property/Property";

export class ListOfNumbersProperty extends Property {
  private _parsedValue: number[];

  get value(): number[] {
    if (this._parsedValue === undefined) {
      this._parsedValue = this.getParsedValue();
    }

    return this._parsedValue;
  }

  private getParsedValue(): number[] {
    return this._value === null ? [] : this._value
      .toString()
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .filter(c => c != "")
      .map(parseFloat);
  }

  toString(): string {
    return this.value.join(" ");
  }
}

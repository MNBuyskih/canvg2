import {AbstractElements} from "src/elements/AbstractElements";

export class Property {
  protected _value: string | null;

  constructor(value: string | null, protected element?: AbstractElements) {
    this._value = value;
  }

  get value(): any {
    return this._value;
  }

  toString() {
    return this._value;
  }
}

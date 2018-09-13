import {AbstractElements} from "src/elements/AbstractElements";

export class Property {
  protected element?: AbstractElements;
  protected _value: string | null;

  constructor(value: string | null, element?: AbstractElements) {
    this._value = value;
    this.element = element;
  }

  get value(): any {
    return this._value;
  }

  toString() {
    return this._value;
  }
}

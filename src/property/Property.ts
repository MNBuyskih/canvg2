import {AbstractElements} from "elements/AbstractElements";

export class Property {
  protected element?: AbstractElements;

  constructor(value: string | null, element?: AbstractElements) {
    this._value = value;
    this.element = element;
  }

  protected _value: string | null;

  get value(): any {
    return this._value;
  }

  toString() {
    return this._value;
  }
}

import {AbstractElements} from "src/elements/AbstractElements";
import {IAttributeValue} from "src/types/IAttributeValue";

export class Property implements IAttributeValue{
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

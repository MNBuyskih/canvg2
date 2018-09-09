export class Property {
  constructor(value: string) {
    this._value = value;
  }

  protected _value: string;

  get value(): any {
    return this._value;
  }

  toString() {
    return this._value;
  }
}

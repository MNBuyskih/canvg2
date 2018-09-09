export class Property {
  constructor(value: string | null) {
    this._value = value;
  }

  protected _value: string | null;

  get value(): any {
    return this._value;
  }

  toString() {
    return this._value;
  }
}

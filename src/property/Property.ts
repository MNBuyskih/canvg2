export class Property {
  protected _value: string | null;

  constructor(value: string | null) {
    this._value = value;
  }

  get value(): any {
    return this._value;
  }

  toString() {
    return this._value;
  }
}

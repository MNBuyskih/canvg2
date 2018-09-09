export class Property {
  constructor(protected _value: string) {
  }

  get value(): any {
    return this._value;
  }

  toString() {
    return this._value;
  }
}

import {AbstractElements} from "src/elements/AbstractElements";
import {ElementsFactoryStore} from "src/factory/ElementsFactoryStore";
import {Property} from "src/property/Property";

export class UrlProperty extends Property {
  private _parsedValue: AbstractElements | null;

  get value(): AbstractElements | null {
    return this.parsedValue();
  }

  private parsedValue() {
    if (this._parsedValue !== undefined) {
      return this._parsedValue;
    }

    if (
      this._value === null ||
      !/^url\(#.+?\)/.test(this._value.trim())
    ) {
      return this._parsedValue = null;
    }

    const url = this._value.trim()
      .replace(/^url\(#/, "")
      .replace(/\)$/, "");

    return this._parsedValue = ElementsFactoryStore.get(url);
  }
}

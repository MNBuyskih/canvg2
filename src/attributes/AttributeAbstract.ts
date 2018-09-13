import {AbstractElements} from "src/elements/AbstractElements";
import {Property} from "src/property/Property";

export abstract class AttributeAbstract<T> {
  name: keyof T;
  value: Property;

  constructor(name: keyof T, value: string, protected element?: AbstractElements) {
    this.name = name;
    this.value = this.getValue(value);
  }

  protected abstract getValue(value: string): Property
}

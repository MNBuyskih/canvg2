import {AbstractElements} from "src/elements/AbstractElements";
import {ColorProperty} from "src/property/ColorProperty";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {Property} from "src/property/Property";
import {IAttributes} from "src/types/IAttributes";

export class Attribute {
  name: string;
  value: Property;
  element?: AbstractElements;

  constructor(name: keyof IAttributes, value: string, element?: AbstractElements) {
    this.name = name;
    this.element = element;
    this.value = this.getValue(value);
  }

  private getValue(value: string) {
    switch (this.name) {
      case "viewport":
        return new ListOfNumbersProperty(value, this.element);
      case "stroke":
        return new ColorProperty(value, this.element);
      default:
        return new Property(value, this.element);
    }
  }
}

import {AbstractElements} from "elements/AbstractElements";
import {ColorProperty} from "property/ColorProperty";
import {ListOfNumbersProperty} from "property/ListOfNumbersProperty";
import {Property} from "property/Property";
import {IAttributes} from "types/IAttributes";

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

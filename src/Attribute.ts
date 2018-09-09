import {ListOfNumbersProperty} from "property/ListOfNumbersProperty";
import {Property} from "property/Property";
import {IAttributes} from "types/IAttributes";

export class Attribute {
  name: string;
  value: Property;

  constructor(name: keyof IAttributes, value: string) {
    this.name = name;
    this.value = this.getValue(value);
  }

  private getValue(value: string) {
    switch (this.name) {
      case "viewport":
        return new ListOfNumbersProperty(value);
      default:
        return new Property(value);
    }
  }
}

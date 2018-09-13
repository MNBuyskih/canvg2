import {AttributeAbstract} from "src/attributes/AttributeAbstract";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {NumberProperty} from "src/property/NumberProperty";
import {Property} from "src/property/Property";
import {IAttributes} from "src/types/IAttributes";

export class Attribute extends AttributeAbstract<IAttributes> {
  protected getValue(value: string) {
    switch (this.name) {
      case "viewBox":
        return new ListOfNumbersProperty(value);
      case "x1":
      case "x2":
      case "y1":
      case "y2":
        return new NumberProperty(value);
      default:
        return new Property(value);
    }
  }
}

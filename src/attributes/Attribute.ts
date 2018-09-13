import {AttributeAbstract} from "src/attributes/AttributeAbstract";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {Property} from "src/property/Property";
import {IAttributes} from "src/types/IAttributes";

export class Attribute extends AttributeAbstract<IAttributes> {
  protected getValue(value: string) {
    switch (this.name) {
      case "viewBox":
        return new ListOfNumbersProperty(value);
      default:
        return new Property(value);
    }
  }
}

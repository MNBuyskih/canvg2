import {AttributeAbstract} from "src/attributes/AttributeAbstract";
import {PaintProperty} from "src/property/PaintProperty";
import {Property} from "src/property/Property";
import {IStyleAttributes} from "src/types/IStyleAttributes";

export class StyleAttribute extends AttributeAbstract<IStyleAttributes> {
  protected getValue(value: string): Property {
    switch (this.name) {
      case "stroke":
        return new PaintProperty(value, this.element);
      default :
        return new Property(value);
    }
  }
}

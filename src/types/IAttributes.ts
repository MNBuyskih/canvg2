import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {Property} from "src/property/Property";

export interface IAttributes {
  viewBox: ListOfNumbersProperty;
  id: Property;
  x1: Property;
  x2: Property;
  y1: Property;
  y2: Property;
}

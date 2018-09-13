import {Attribute} from "src/attributes/Attribute";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {NumberProperty} from "src/property/NumberProperty";
import {Property} from "src/property/Property";
import {IAttributes} from "src/types/IAttributes";

describe(Attribute, () => {
  describe("should initiate different class for attr value according to attr name", () => {

    it("default", () => {
      const attr = new Attribute("a" as keyof IAttributes, "b");
      expect(attr.value).toBeInstanceOf(Property);
    });

    it("viewport", () => {
      const attr = new Attribute("viewBox", "0 0 0 0");
      expect(attr.value).toBeInstanceOf(ListOfNumbersProperty);
    });

    it("x1", () => {
      const attr = new Attribute("x1", "10");
      expect(attr.value).toBeInstanceOf(NumberProperty);
    });
    it("x2", () => {
      const attr = new Attribute("x2", "20");
      expect(attr.value).toBeInstanceOf(NumberProperty);
    });
    it("y1", () => {
      const attr = new Attribute("y1", "20");
      expect(attr.value).toBeInstanceOf(NumberProperty);
    });
    it("y2", () => {
      const attr = new Attribute("y2", "20");
      expect(attr.value).toBeInstanceOf(NumberProperty);
    });
  });
});

import {Attribute} from "src/attributes/Attribute";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
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
  });
});

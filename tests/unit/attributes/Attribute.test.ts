import {Attribute} from "src/attributes/Attribute";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {Property} from "src/property/Property";

describe(Attribute, () => {
  describe("should initiate different class for attr value according to attr name", () => {

    it("default", () => {
      const attr = new Attribute("a", "b");
      expect(attr.value).toBeInstanceOf(Property);
    });

    it("viewport", () => {
      const attr = new Attribute("viewport", "0 0 0 0");
      expect(attr.value).toBeInstanceOf(ListOfNumbersProperty);
    });
  });
});

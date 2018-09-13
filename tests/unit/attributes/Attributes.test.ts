import {Attribute} from "src/attributes/Attribute";
import {Attributes} from "src/attributes/Attributes";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {IAttributes} from "src/types/IAttributes";
import {xml} from "xml";

describe(Attributes, () => {
  describe("attributes", () => {
    it("should be list of Attribute", () => {
      const svg = xml("<svg viewBox=\"0 0 100 100\"></svg>");
      let a: Record<keyof IAttributes, Attribute | undefined> = Attributes.create(Array.from(svg.documentElement.attributes));
      expect(a.viewBox).toBeInstanceOf(Attribute);
      expect(a.viewBox && a.viewBox.value).toBeInstanceOf(ListOfNumbersProperty);
    });
  });
});

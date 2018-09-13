import {Attribute} from "src/attributes/Attribute";
import {Attributes} from "src/attributes/Attributes";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";
import {IAttributes} from "src/types/IAttributes";
import {xml} from "tests/xml";

describe(Attributes, () => {
  describe("attributes", () => {
    it("should be list of Attribute", () => {
      const svg = xml("<svg viewBox=\"0 0 100 100\"></svg>");
      let a: Record<keyof IAttributes, Attribute | undefined> = Attributes.create(Array.from(svg.attributes), ElementsFactory.create(xml("<svg/>")));
      expect(a.viewBox).toBeInstanceOf(Attribute);
      expect(a.viewBox && a.viewBox.value).toBeInstanceOf(ListOfNumbersProperty);
    });
  });
});

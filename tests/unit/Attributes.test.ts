import {Attribute} from "../../src/Attribute";
import {Attributes} from "../../src/Attributes";
import {Property} from "../../src/property/Property";
import {IAttributes} from "../../src/types/IAttributes";
import {xml} from "../xml";

describe(Attributes, () => {
  describe("attributes", () => {
    it("should be list of Attribute", () => {
      const svg = xml("<svg viewBox=\"0 0 100 100\"></svg>");
      let a: Record<keyof IAttributes, Attribute | undefined> = Attributes.create(svg.documentElement.attributes);
      expect(a.viewBox).toBeInstanceOf(Attribute);
      expect(a.viewBox && a.viewBox.value).toBeInstanceOf(Property);
    });
  });
});

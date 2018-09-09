import {Attributes} from "../../../src/Attributes";
import {ElementsSvg} from "../../../src/elements/ElementsSvg";
import {xml} from "../../xml";

describe(ElementsSvg, () => {
  describe("attributes", () => {
    it("should be Attributes instance", () => {
      const svg = xml("<svg></svg>");
      const element = new ElementsSvg(svg.documentElement);
      expect(element.attributes).toBeInstanceOf(Attributes);
    });

    it("should parse attributes", () => {
      const svg = xml("<svg viewBox=\"0 0 0 0\"></svg>");
      const element = new ElementsSvg(svg.documentElement);
      const viewBox = element.attributes.viewBox;
      expect(viewBox && viewBox.value + "").toEqual("0 0 0 0");
    });
  });
});

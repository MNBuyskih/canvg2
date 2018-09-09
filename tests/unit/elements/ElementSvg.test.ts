import {AbstractElements} from "../../../src/AbstractElements";
import {Attributes} from "../../../src/Attributes";
import {ElementsSvg} from "../../../src/elements/ElementsSvg";
import {ElementsFactory} from "../../../src/ElementsFactory";
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

  describe("children", () => {
    it("should be list", () => {
      const svg = xml("<svg></svg>");
      const element = ElementsFactory.create(svg.documentElement);
      expect(element.children).toBeInstanceOf(Array);
    });

    it("should be Elements", () => {
      const svg = xml(`<svg><svg/><svg/></svg>`);
      const element = ElementsFactory.create(svg.documentElement);
      expect(element.children.length).toEqual(2);
      expect(element.children[0]).toBeInstanceOf(AbstractElements);
      expect(element.children[1]).toBeInstanceOf(AbstractElements);
    });
  });
});

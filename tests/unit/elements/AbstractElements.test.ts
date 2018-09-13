import {Attributes} from "src/attributes/Attributes";
import {StyleAttribute} from "src/attributes/StyleAttribute";
import {StyleAttributes} from "src/attributes/StyleAttributes";
import {AbstractElements} from "src/elements/AbstractElements";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {PaintProperty} from "src/property/PaintProperty";
import {xml} from "tests/xml";

describe(AbstractElements, () => {
  beforeEach(() => {
    ElementsFactory.createStore();
  });

  describe("attributes", () => {
    it("should be Attributes instance", () => {
      const svg = xml("<svg></svg>");
      const element = ElementsFactory.create(svg);
      expect(element.attributes).toBeInstanceOf(Attributes);
    });

    it("should parse attributes", () => {
      const svg = xml("<svg viewBox=\"0 0 0 0\"></svg>");
      const element = ElementsFactory.create(svg);
      const viewBox = element.attributes.viewBox;
      expect(viewBox && viewBox.value + "").toEqual("0 0 0 0");
    });

    describe("style attributes", () => {
      it("should be not included in attributes", () => {
        const svg = xml("<svg stroke=\"black\"></svg>");
        const element = ElementsFactory.create(svg);
        // @ts-ignore
        const stroke = element.attributes.stroke;
        expect(stroke).toBeUndefined();
      });

      it("should keep styles attributes", () => {
        const svg = xml("<svg stroke=\"black\"></svg>");
        const element = ElementsFactory.create(svg);
        const stroke: StyleAttribute | undefined = element.stylesAttributes.stroke;
        expect(element.stylesAttributes).toBeInstanceOf(StyleAttributes);
        expect(stroke && stroke.value).toBeInstanceOf(PaintProperty);
      });
    });
  });

  describe("children", () => {
    it("should be list", () => {
      const svg = xml("<svg></svg>");
      const element = ElementsFactory.create(svg);
      expect(element.children).toBeInstanceOf(Array);
    });

    it("should be Elements", () => {
      const svg = xml(`<svg><svg/><svg/></svg>`);
      const element = ElementsFactory.create(svg);
      expect(element.children.length).toEqual(2);
      expect(element.children[0]).toBeInstanceOf(AbstractElements);
      expect(element.children[1]).toBeInstanceOf(AbstractElements);
    });
  });
});

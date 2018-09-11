import {ElementsLine} from "src/elements";
import {AbstractElements} from "src/elements/AbstractElements";
import {ElementsFactory} from "src/ElementsFactory";
import {PaintProperty} from "src/property/PaintProperty";
import {RGBA} from "src/property/RGBA";
import {xml} from "xml";

describe(PaintProperty, () => {
  describe("should represent different property on getting value", () => {
    it("for enums", () => {
      ["none", "context-fill", "context-stroke"].forEach(c => {
        expect(new PaintProperty(c).value).toEqual(c);
      });
    });

    it("for child should return link to child element", () => {
      expect(new PaintProperty("child").value).toBeNull();

      let documentElement = xml(`<svg><line/></svg>`).documentElement;
      let element = ElementsFactory.create(documentElement);
      expect(new PaintProperty("child", element).value).toBeInstanceOf(ElementsLine);

      documentElement = xml(`<svg><line/><line/></svg>`).documentElement;
      element = ElementsFactory.create(documentElement);
      expect(new PaintProperty("child(2)", element).value).toBeInstanceOf(ElementsLine);
    });

    it("for color should return color instance (like ColorProperty)", () => {
      expect(new PaintProperty("black").value).toBeInstanceOf(RGBA);
      expect(new PaintProperty("#ffddee").value).toBeInstanceOf(RGBA);
    });

    xit("for url should return link to element", () => {
      expect(new PaintProperty("url(#ffddee)").value).toBeInstanceOf(AbstractElements);
    });
  });
});

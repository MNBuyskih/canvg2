import {ElementsLine} from "src/elements";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {PaintProperty} from "src/property/PaintProperty";
import {RGBA} from "src/property/RGBA";
import {UrlProperty} from "src/property/UrlProperty";
import {xml} from "tests/xml";

describe(PaintProperty, () => {
  describe("should represent different property on getting value", () => {
    it("for enums", () => {
      ["none", "context-fill", "context-stroke"].forEach(c => {
        expect(new PaintProperty(c).value).toEqual(c);
      });
    });

    it("for child should return link to child element", () => {
      expect(new PaintProperty("child").value).toBeNull();

      let documentElement = xml(`<svg><line/></svg>`);
      let element = ElementsFactory.create(documentElement);
      expect(new PaintProperty("child", element).value).toBeInstanceOf(ElementsLine);

      documentElement = xml(`<svg><line/><line/></svg>`);
      element = ElementsFactory.create(documentElement);
      expect(new PaintProperty("child(2)", element).value).toBeInstanceOf(ElementsLine);
    });

    it("for color should return color instance (like ColorProperty)", () => {
      expect(new PaintProperty("black").value).toBeInstanceOf(RGBA);
      expect(new PaintProperty("#ffddee").value).toBeInstanceOf(RGBA);
    });

    it("for url should return link to element", () => {
      const documentElement = xml(`<svg id="test"/>`);
      const element = ElementsFactory.create(documentElement);
      const propertyValue = new PaintProperty("url(#test)").value;
      expect(propertyValue).toBeInstanceOf(UrlProperty);
      expect((propertyValue as UrlProperty).value).toBe(element);
    });

    it("should return 'none' value when passed value is null", () => {
      expect(new PaintProperty(null).value).toEqual("none");
    });

    it("should cache result", () => {
      const prop = new PaintProperty(null);
      const parsedValue = spyOn(prop, "getParsedValue").and.returnValue("none");

      prop.value;
      prop.value;
      expect(parsedValue).toBeCalledTimes(1);
    });
  });
});

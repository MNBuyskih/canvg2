import {StyleAttribute} from "src/attributes/StyleAttribute";
import {AbstractElements} from "src/elements/AbstractElements";
import {PaintProperty} from "src/property/PaintProperty";

describe(StyleAttribute, () => {
  describe("should specify different classes for different styles", () => {
    it("stroke", () => {
      const style = new StyleAttribute("stroke", "black", new AbstractElements(document.createElement("svg")));
      expect(style.value).toBeInstanceOf(PaintProperty);
    });
  });
});

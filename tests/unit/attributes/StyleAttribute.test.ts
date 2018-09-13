import {StyleAttribute} from "src/attributes/StyleAttribute";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {PaintProperty} from "src/property/PaintProperty";

describe(StyleAttribute, () => {
  describe("should specify different classes for different styles", () => {
    it("stroke", () => {
      const svg = document.createElement("svg");
      ElementsFactory.createStore();
      const style = new StyleAttribute("stroke", "black", ElementsFactory.create(svg));
      expect(style.value).toBeInstanceOf(PaintProperty);
    });
  });
});

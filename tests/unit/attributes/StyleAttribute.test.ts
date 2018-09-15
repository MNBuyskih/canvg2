import {StyleAttribute} from "src/attributes/StyleAttribute";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {PaintProperty} from "src/property/PaintProperty";
import {Property} from "src/property/Property";
import {IStyleAttributes} from "src/types/IStyleAttributes";

describe(StyleAttribute, () => {
  describe("should specify different classes for different styles", () => {
    it("default", () => {
      const style = new StyleAttribute("unknown style" as keyof IStyleAttributes, "value");
      expect(style.value).toBeInstanceOf(Property);
    });

    it("stroke", () => {
      const svg = document.createElement("svg");
      const style = new StyleAttribute("stroke", "black", ElementsFactory.create(svg));
      expect(style.value).toBeInstanceOf(PaintProperty);
    });
  });
});

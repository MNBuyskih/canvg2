import {ElementsDummy, ElementsSvg} from "src/elements";
import {ElementsFactory} from "src/ElementsFactory";

describe(ElementsFactory, () => {
  describe("should create different elements according to nodeName", () => {
    it("ElementsSVG for svg", () => {
      const element = ElementsFactory.create(document.createElement("svg"));
      expect(element).toBeInstanceOf(ElementsSvg);
    });

    it("default", () => {
      const spy = spyOn(console, "warn");
      const element = ElementsFactory.create(document.createElement("unknown-tag-name"));
      expect(element).toBeInstanceOf(ElementsDummy);
      expect(spy).toBeCalled();
    });
  });
});

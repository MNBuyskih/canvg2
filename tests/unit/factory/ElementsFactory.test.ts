import {CanVG2} from "src/CanVG2";
import {ElementsDummy, ElementsSvg} from "src/elements";
import {ElementsLine} from "src/elements/ElementsLine";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {mockedCanvas} from "tests/mock";
import {xml} from "tests/xml";

describe(ElementsFactory, () => {
  describe("Should use only this for create elements", () => {
    it("On create", () => {
      const create = spyOn(ElementsFactory, "create");
      new CanVG2(mockedCanvas, xml(`<svg></svg>`));
      expect(create).toBeCalled();
    });
    it("On getChildren", () => {
      const getChildren = spyOn(ElementsFactory, "getChildren");
      new CanVG2(mockedCanvas, xml(`<svg><line/><line/><line/></svg>`));
      expect(getChildren).toBeCalled();
    });
    it("On getAttributes", () => {
      const getAttributes = spyOn(ElementsFactory, "getAttributes").and.returnValue([{}, {}]);
      new CanVG2(mockedCanvas, xml(`<svg><line/><line/><line/></svg>`));
      expect(getAttributes).toBeCalled();
    });
  });

  describe("should create different elements according to nodeName", () => {
    it("ElementsSVG for svg", () => {
      const element = ElementsFactory.create(document.createElement("svg"));
      expect(element).toBeInstanceOf(ElementsSvg);
    });

    it("ElementsLine for line", () => {
      const element = ElementsFactory.create(document.createElement("line"));
      expect(element).toBeInstanceOf(ElementsLine);
    });

    it("should warn if it is unknown tag", () => {
      const spy = spyOn(console, "warn");
      const element = ElementsFactory.create(document.createElement("unknown-tag-name"));
      expect(element).toBeInstanceOf(ElementsDummy);
      expect(spy).toBeCalled();
    });
  });
});

import {mockedCanvas} from "tests/mockedCanvas";
import {CanVG2} from "src/CanVG2";
import {ElementsSvg} from "src/elements";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {xml} from "tests/xml";

describe(ElementsSvg, () => {
  describe("render", () => {
    it("should render all children", () => {
      const el = ElementsFactory.create(xml(`<svg><line/></svg>`));
      const child = el.children[0];
      spyOn(child, "render");
      el.render(new CanVG2(mockedCanvas, xml(`<svg><line/></svg>`)));
      expect(child.render).toBeCalled();
    });
  });
});

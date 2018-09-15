import {mockedCanvg} from "tests/mock";
import {ElementsSvg} from "src/elements";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {xml} from "tests/xml";

describe(ElementsSvg, () => {
  describe("render", () => {
    it("should render all children", () => {
      const el = ElementsFactory.create(xml(`<svg><line/></svg>`));
      const child = el.children[0];
      spyOn(child, "render");
      el.render(mockedCanvg(`<svg><line/></svg>`));
      expect(child.render).toBeCalled();
    });
  });
});

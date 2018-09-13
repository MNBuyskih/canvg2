import {mockedContext} from "tests/mockContext";
import {ElementsSvg} from "src/elements";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {xml} from "tests/xml";

describe(ElementsSvg, () => {
  describe("render", () => {
    it("should render all children", () => {
      ElementsFactory.createStore();
      const el = ElementsFactory.create(xml(`<svg><line/></svg>`).documentElement);
      const child = el.children[0];
      spyOn(child, "render");
      el.render(mockedContext);
      expect(child.render).toBeCalled();
    });
  });
});

import {ElementsLine} from "src/elements";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {mockedContext} from "tests/mockContext";
import {xml} from "tests/xml";

describe(ElementsLine, () => {
  describe("render", () => {
    let context: CanvasRenderingContext2D;
    let el: ElementsLine;
    beforeEach(() => {
      context = mockedContext;
      ElementsFactory.createStore();
      el = ElementsFactory.create(xml(`<line x1="0" y1="80" x2="100" y2="20" stroke="black"/>`).documentElement);
    });

    it("should use beginPath, moveTo, lineTo", () => {
      el.render(context);
      expect(context.beginPath).toBeCalled();
      expect(context.moveTo).toBeCalledWith(0, 80);
      expect(context.lineTo).toBeCalledWith(100, 20);
      expect(context.stroke).toBeCalled();
    });
  });
});

import {CanVG2} from "src/CanVG2";
import {ElementsLine} from "src/elements";
import {mockedCanvg} from "tests/mock";

describe(ElementsLine, () => {
  describe("render", () => {
    let canvg: CanVG2;
    beforeEach(() => {
      canvg = mockedCanvg(`<line x1="0" y1="80" x2="100" y2="20" stroke="black"/>`);
    });

    it("should use beginPath, moveTo, lineTo", () => {
      canvg.draw();
      expect(canvg.context.beginPath).toBeCalled();
      expect(canvg.context.moveTo).toBeCalledWith(0, 80);
      expect(canvg.context.lineTo).toBeCalledWith(100, 20);
      expect(canvg.context.stroke).toBeCalled();
    });
  });
});

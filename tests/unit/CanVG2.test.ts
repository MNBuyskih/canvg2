import {CanVG2} from "src/CanVG2";
import {ICanvgOptions} from "src/types/ICanvgOptions";
import {mockedCanvas} from "tests/mock";
import {xml} from "tests/xml";

describe(CanVG2, () => {
  const doc = xml("<svg></svg>");
  let cvg: CanVG2;

  describe("elements", () => {
    beforeEach(() => {
      cvg = new CanVG2(mockedCanvas, doc);
    });

    it("Root element should be marked as root", () => {
      expect(cvg.rootElement.root).toBeTruthy();
    });
  });

  describe("context", () => {
    let getContext: jasmine.Spy;
    let context = {};
    beforeEach(() => {
      getContext = spyOn(mockedCanvas, "getContext").and.returnValue(context);
    });

    it("should get context", () => {
      cvg = new CanVG2(mockedCanvas, doc);
      expect(getContext).toBeCalledWith("2d");
      expect(cvg.context).toEqual(context);
    });

    afterEach(() => getContext.and.stub());
  });

  describe("wrong context", () => {
    let getContext: jasmine.Spy;
    beforeEach(() => getContext = spyOn(mockedCanvas, "getContext").and.returnValue(null));

    it("should get exception", () => {
      expect(() => new CanVG2(mockedCanvas, doc)).toThrow();
    });

    afterEach(() => getContext.and.stub());
  });

  describe("should take options", () => {
    const canvg = new CanVG2(mockedCanvas, xml(), {});
    expect(canvg.options).toEqual({
      clearCanvas: false,
    } as ICanvgOptions);

    describe("clearCanvas", () => {
      it("default value", () => {
        const canvg = new CanVG2(mockedCanvas, xml(), {});
        expect(canvg.options.clearCanvas).toBeFalsy();
      });
      it("true value", () => {
        const canvg = new CanVG2(mockedCanvas, xml(), {clearCanvas: true});
        expect(canvg.options.clearCanvas).toBeTruthy();
      });

      it("don't clear canvas", () => {
        const canvg = new CanVG2(mockedCanvas, xml());
        const clear = spyOn(canvg.context, "clearRect");
        canvg.draw();
        expect(clear).not.toBeCalled();
      });
      it("clear canvas", () => {
        const canvg = new CanVG2(mockedCanvas, xml(), {clearCanvas: true});
        const clear = spyOn(canvg.context, "clearRect");
        canvg.draw();
        expect(clear).toBeCalledWith(0, 0, mockedCanvas.width, mockedCanvas.height);
      });
    });
  });
});

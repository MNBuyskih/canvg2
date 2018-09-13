import {mockCanvas} from "tests/MockCanvas";
import {CanVG2} from "src/CanVG2";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {xml} from "tests/xml";

describe(CanVG2, () => {
  const doc = xml("<svg></svg>");
  let cvg: CanVG2;

  beforeEach(() => {
    ElementsFactory.createStore();
  });

  describe("elements", () => {
    beforeEach(() => {
      cvg = new CanVG2(mockCanvas, doc);
    });

    it("Root element should be marked as root", () => {
      expect(cvg.rootElement.root).toBeTruthy();
    });
  });

  describe("context", () => {
    let getContext: jasmine.Spy;
    let context = {};
    beforeEach(() => {
      getContext = spyOn(mockCanvas, "getContext").and.returnValue(context);
    });

    it("should get context", () => {
      cvg = new CanVG2(mockCanvas, doc);
      expect(getContext).toBeCalledWith("2d");
      expect(cvg.context).toEqual(context);
    });

    afterEach(() => getContext.and.stub());
  });

  describe("wrong context", () => {
    let getContext: jasmine.Spy;
    beforeEach(() => getContext = spyOn(mockCanvas, "getContext").and.returnValue(null));

    it("should get exception", () => {
      expect(() => new CanVG2(mockCanvas, doc)).toThrow();
    });

    afterEach(() => getContext.and.stub());
  });
});

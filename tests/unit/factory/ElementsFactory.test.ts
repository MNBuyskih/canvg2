import {CanVG2} from "src/CanVG2";
import {ElementsDummy, ElementsSvg} from "src/elements";
import {ElementsLine} from "src/elements/ElementsLine";
import {ElementsFactory} from "src/factory/ElementsFactory";
import {ElementsFactoryStore} from "src/factory/ElementsFactoryStore";
import {mockCanvas} from "tests/MockCanvas";
import {xml} from "tests/xml";

describe(ElementsFactory, () => {
  beforeEach(() => {
    ElementsFactory.store = undefined;
  });

  describe("Should use only this for create elements", () => {
    beforeEach(() => {
      ElementsFactory.createStore();
    });

    it("On create", () => {
      const create = spyOn(ElementsFactory, "create");
      new CanVG2(mockCanvas, xml(`<svg></svg>`));
      expect(create).toBeCalled();
    });
    it("On getChildren", () => {
      const getChildren = spyOn(ElementsFactory, "getChildren");
      new CanVG2(mockCanvas, xml(`<svg><line/><line/><line/></svg>`));
      expect(getChildren).toBeCalled();
    });
    it("On getAttributes", () => {
      const getAttributes = spyOn(ElementsFactory, "getAttributes").and.returnValue([{}, {}]);
      new CanVG2(mockCanvas, xml(`<svg><line/><line/><line/></svg>`));
      expect(getAttributes).toBeCalled();
    });
  });

  describe("should create different elements according to nodeName", () => {
    beforeEach(() => {
      ElementsFactory.createStore();
    });

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

  describe("should keep elements in store", () => {
    it("should throw exception when no store", () => {
      const svg = xml(`<svg></svg>`);
      expect(() => ElementsFactory.create(svg)).toThrow();
    });

    it("should create new store every time it call", () => {
      const store = ElementsFactory.createStore();
      expect(store).toBeInstanceOf(ElementsFactoryStore);

      const newStore = ElementsFactory.createStore();
      expect(newStore).not.toBe(store);
    });

    it("should return the last created store", () => {
      const store = ElementsFactory.createStore();
      const lastStore = ElementsFactory.getStore();
      expect(lastStore).toBe(store);
    });

    it("should throw exception when there are no created stores", () => {
      expect(() => ElementsFactory.getStore()).toThrow();
    });

    describe("store", () => {
      beforeEach(() => {
        ElementsFactory.createStore();
      });

      it("should return element from store", () => {
        const htmlEl = xml(`<svg id="test"></svg>`);
        const newEl = ElementsFactory.create(htmlEl);

        expect(ElementsFactory.getStore().get("test")).toBe(newEl);
      });
    });
  });
});

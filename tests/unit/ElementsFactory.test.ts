import {mockCanvas} from "MockCanvas";
import {CanVG2} from "src/CanVG2";
import {ElementsDummy, ElementsSvg} from "src/elements";
import {ElementsLine} from "src/elements/ElementsLine";
import {ElementsFactory} from "src/ElementsFactory";
import {ElementsFactoryStore} from "src/ElementsFactoryStore";
import {xml} from "xml";

describe(ElementsFactory, () => {
  beforeEach(() => {
    ElementsFactory.store = null;
  });

  describe("Should use only this for create elements", () => {
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

  describe("should keep elements in store", () => {
    it("should create new store every time it call", () => {
      const store = ElementsFactory.createStore();
      expect(store).toBeInstanceOf(ElementsFactoryStore);

      const newStore = ElementsFactory.createStore();
      expect(newStore).not.toBe(store);
    });

    it("should return the last created store", () => {
      const store = ElementsFactory.createStore();
      const lastStore = ElementsFactory.lastStore();
      expect(lastStore).toBe(store);
    });

    it("should throw exception when there are no created stores", () => {
      expect(() => ElementsFactory.lastStore()).toThrow();
    });
  });
});

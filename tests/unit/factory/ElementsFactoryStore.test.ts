import {ElementsFactory} from "src/factory/ElementsFactory";
import {ElementsFactoryStore} from "src/factory/ElementsFactoryStore";

describe(ElementsFactoryStore, () => {
  let store: ElementsFactoryStore;

  beforeEach(() => {
    ElementsFactory.createStore();
    store = new ElementsFactoryStore();
  });

  it("should keep the element", () => {
    expect(store.add(ElementsFactory.create(document.createElement("svg")))).toBeUndefined();
  });

  describe("get element by id", () => {
    it("should return the element by element id", () => {
      const el = new Image();
      el.id = "test";
      const newEl = ElementsFactory.create(el);
      store.add(newEl);
      expect(store.get("test")).toEqual(newEl);
    });

    it("should return different elements by their own ids", () => {
      const el1 = new Image();
      const el2 = new Image();
      el1.id = "test1";
      el2.id = "test2";
      const newEl1 = ElementsFactory.create(el1);
      const newEl2 = ElementsFactory.create(el2);
      store.add(newEl1);
      store.add(newEl2);

      expect(store.get("test1")).toEqual(newEl1);
      expect(store.get("test2")).toEqual(newEl2);
    });

    it("should return undefined when element was not found", () => {
      expect(store.get("test")).toBeNull();
    });
  });
});

import {AbstractElements} from "src/elements/AbstractElements";
import {ElementsFactoryStore} from "src/ElementsFactoryStore";

describe(ElementsFactoryStore, () => {
  let store: ElementsFactoryStore;

  beforeEach(() => {
    store = new ElementsFactoryStore();
  });

  it("should keep the element", () => {
    expect(store.add(new AbstractElements(new Image()))).toBeUndefined();
  });

  describe("get element by id", () => {
    it("should return the element by element id", () => {
      const el = new Image();
      el.id = "test";
      store.add(el);
      expect(store.get("test")).toEqual(el);
    });

    it("should return different elements by their own ids", () => {
      const el1 = new Image();
      const el2 = new Image();
      el1.id = "test1";
      el2.id = "test2";
      store.add(el1);
      store.add(el2);

      expect(store.get("test1")).toEqual(el1);
      expect(store.get("test2")).toEqual(el2);
    });

    it("should return undefined when element was not found", () => {
      expect(store.get("test")).toBeUndefined();
    });
  });
});

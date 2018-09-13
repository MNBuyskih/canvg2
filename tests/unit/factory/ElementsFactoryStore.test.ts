import {ElementsFactory} from "src/factory/ElementsFactory";
import {ElementsFactoryStore} from "src/factory/ElementsFactoryStore";
import {xml} from "tests/xml";

describe(ElementsFactoryStore, () => {
  const store = ElementsFactoryStore;

  it("should keep the element", () => {
    expect(store.add(ElementsFactory.create(xml()))).toBeUndefined();
  });

  it("should clean the store", () => {
    expect(store.clean()).toBeUndefined();
  });

  describe("get element by id", () => {
    beforeEach(store.clean);

    it("should return the element by element id", () => {
      const newEl = ElementsFactory.create(xml(`<svg id="test"/>`));
      store.add(newEl);
      expect(store.get("test")).toEqual(newEl);
    });

    it("should return different elements by their own ids", () => {
      const el1 = document.createElement("svg");
      const el2 = document.createElement("svg");
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

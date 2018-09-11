import {AbstractElements} from "src/elements/AbstractElements";
import {UrlProperty} from "src/property/UrlProperty";

describe(UrlProperty, () => {
  describe("keep ids and elements", () => {
    it("should save element", () => {
      expect(UrlProperty.define("id", new AbstractElements(document.createElement("span"))));
    });
    it("should return element", () => {
      const element = new AbstractElements(document.createElement("span"));
      UrlProperty.define("id", element);
      expect(UrlProperty.get("id")).toEqual(element);
    });
    it("should return null if wrong id", () => {
      expect(UrlProperty.get("wrong id")).toBeNull();
    });
  });

  describe("property", () => {
    beforeEach(() => {
      const element = new AbstractElements(document.createElement("span"));
      UrlProperty.define("id", element);
    });

    it("should return element in value", () => {

    });
  });
});

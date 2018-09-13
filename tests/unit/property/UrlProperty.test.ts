import {ElementsFactory} from "src/factory/ElementsFactory";
import {UrlProperty} from "src/property/UrlProperty";
import {xml} from "xml";

describe(UrlProperty, () => {
  beforeEach(() => ElementsFactory.createStore());

  it("should return element in value", () => {
    const svg = xml(`<svg id="test"></svg>`);
    const element = ElementsFactory.create(svg.documentElement);
    const property = new UrlProperty("url(#test)");

    expect(property.toString()).toEqual("url(#test)");
    expect(property.value).toBe(element);
  });

  it("should return null if source value is null", () => {
    expect(new UrlProperty(null).value).toBeNull();
  });

  it("should return null if wrong format", () => {
    expect(new UrlProperty("wrong url format").value).toBeNull();
  });
});

import {Property} from "../../../src/property/Property";

describe(Property, () => {
  it("should return the same value", () => {
    const property = new Property("abc");
    expect(property.value).toEqual("abc");
    expect(property + "").toEqual("abc");
  });
});

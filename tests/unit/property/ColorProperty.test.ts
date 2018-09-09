import {ColorProperty} from "src/property/ColorProperty";
import {RGBA} from "src/property/RGBA";

describe(ColorProperty, () => {
  it("should convert value to RGBA class", () => {
    const value = new ColorProperty("white").value;
    expect(value).toBeInstanceOf(RGBA);
    expect(value.color).toEqual("white");
    expect(value.hash).toEqual("#ffffff");
  });
});

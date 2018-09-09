import {ColorProperty} from "src/property/ColorProperty";
import {RGBA} from "src/property/RGBA";

describe(ColorProperty, () => {
  it("should convert value to RGBA class", () => {
    expect(new ColorProperty("white").value).toBeInstanceOf(RGBA);
  });
});


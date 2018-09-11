import {ColorProperty} from "src/property/ColorProperty";
import {RGBA} from "src/property/RGBA";

describe(ColorProperty, () => {
  it("should convert value to RGBA class", () => {
    const value = new ColorProperty("white").value;
    expect(value).toBeInstanceOf(RGBA);
    expect(value.color).toEqual("white");
    expect(value.hash).toEqual("#ffffff");
  });

  it("for null value color should be black", () => {
    expect(new ColorProperty(null).value + "").toEqual("black");
  });

  describe("cached value", () => {
    let color: ColorProperty;
    beforeEach(() => {
      color = new ColorProperty("white");
    });

    it("should cache value", () => {
      expect(color.value).toBeInstanceOf(RGBA);
      expect(color.value + "").toEqual("white");
    });
  });
});

import {RGBA} from "src/property/RGBA";

describe(RGBA, () => {
  it("should throw in invalid color format", () => {
    expect(() => new RGBA("")).toThrow();
    expect(() => new RGBA("unknown web safe color")).toThrow();
  });

  describe("should take four kinds of colors", () => {
    it("web safe color", () => {
      let rgba = new RGBA("white");
      expect(rgba.r).toEqual(255);
      expect(rgba.g).toEqual(255);
      expect(rgba.b).toEqual(255);
      expect(rgba.a).toEqual(255);
      expect(rgba.rgb).toEqual("rgb(255,255,255)");
      expect(rgba.rgba).toEqual("rgba(255,255,255,1)");
      expect(rgba.hash).toEqual("#ffffff");
      expect(rgba.color).toEqual("white");

      rgba = new RGBA("aliceblue"); // f0 f8 ff
      expect(rgba.r).toEqual(0xf0);
      expect(rgba.g).toEqual(0xf8);
      expect(rgba.b).toEqual(0xff);
      expect(rgba.a).toEqual(255);
      expect(rgba.rgb).toEqual("rgb(240,248,255)");
      expect(rgba.rgba).toEqual("rgba(240,248,255,1)");
      expect(rgba.color).toEqual("aliceblue");
      expect(rgba.hash).toEqual("#f0f8ff");
    });
  });
});

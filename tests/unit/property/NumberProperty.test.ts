import {NumberProperty} from "src/property/NumberProperty";

describe(NumberProperty, () => {
  it("should convert value to num", () => {
    expect(new NumberProperty("10").value).toEqual(10);
    expect(new NumberProperty(" 20").value).toEqual(20);
    expect(new NumberProperty("30px").value).toEqual(30);
    expect(new NumberProperty("40%").value).toEqual(40);
    expect(new NumberProperty("10px 20px").value).toEqual(10);
    expect(new NumberProperty("").value).toEqual(0);
    expect(new NumberProperty(null).value).toEqual(0);
  });

  describe("keep units", () => {
    it("should return null if no units", () => {
      expect(new NumberProperty("10").units).toBeNull();
    });
    it("should return units", () => {
      expect(new NumberProperty("10px").units).toEqual("px");
      expect(new NumberProperty("20%").units).toEqual("%");
    });

    it("sourld store units in contructor", () => {
      expect(new NumberProperty(10, "pt").units).toEqual("pt");
    });
  });

  describe("convert any units to pixels", () => {
    it("return new NumberProperty", () => {
      expect(new NumberProperty("10").toPixels()).toBeInstanceOf(NumberProperty);
    });

    it("convert no units", () => {
      expect(new NumberProperty("10").toPixels().value).toEqual(10);
      expect(new NumberProperty("10px").toPixels().value).toEqual(10);
      expect(new NumberProperty(10, "pt").toPixels().value).toEqual(parseFloat((1 / 72 * 96 * 10).toFixed(2)));
      expect(new NumberProperty(10, "pc").toPixels().value).toEqual(parseFloat((((1 / 72 * 96) * 12 * 10)).toFixed(2)));
      expect(new NumberProperty(10, "cm").toPixels().value).toEqual(parseFloat((10 * 96 / 2.54).toFixed(2)));
      expect(new NumberProperty(10, "mm").toPixels().value).toEqual(parseFloat((10 * 96 / 25.4).toFixed(2)));
      expect(new NumberProperty(10, "in").toPixels().value).toEqual(960);

      expect(() => new NumberProperty(10, "%").toPixels()).toThrow();
      expect(new NumberProperty(10, "%").toPixels(200).value).toEqual(20);
    });
  });
});

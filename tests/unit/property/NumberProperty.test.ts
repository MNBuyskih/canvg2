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
  });

});

import {NumberProperty} from "src/property/NumberProperty";

describe(NumberProperty, () => {
  it("should convert value to num", () => {
    expect(new NumberProperty("10").value).toEqual(10);
    expect(new NumberProperty(" 20").value).toEqual(20);
    expect(new NumberProperty("20px").value).toEqual(20);
    expect(new NumberProperty("10px 20px").value).toEqual(10);
    expect(new NumberProperty("").value).toEqual(0);
    expect(new NumberProperty(null).value).toEqual(0);
  });
});

import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";

describe(ListOfNumbersProperty, () => {
  it("should convert value to list of numbers", () => {
    const prop = new ListOfNumbersProperty("0 0 100 100");
    expect(prop.value).toEqual([0, 0, 100, 100]);
    expect(new ListOfNumbersProperty("").value).toEqual([]);
    expect(new ListOfNumbersProperty(null).value).toEqual([]);
  });

  it("should return string when needed", () => {
    const prop = new ListOfNumbersProperty("0 0 100 100");
    expect(prop + "").toEqual("0 0 100 100");
  });

  it("should skip all available white spaces", () => {
    const prop = new ListOfNumbersProperty("0\t\t0   100 \n\t\n 100");
    expect(prop + "").toEqual("0 0 100 100");
  });

  it("should return empty array for null source value", () => {
    expect(new ListOfNumbersProperty(null).value).toEqual([]);
  });

  it("should cache parsed value", () => {
    const value = new ListOfNumbersProperty(null).value;
    expect(value).toEqual([]);
    expect(value).toEqual([]);
  });
});

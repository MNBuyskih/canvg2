import {ListOfNumbersProperty} from "src/property/ListOfNumbersProperty";

describe(ListOfNumbersProperty, () => {
  it("should convert value to list of numbers", () => {
    expect(new ListOfNumbersProperty("0 0 100 100").value).toEqual([0, 0, 100, 100]);
  });

  it("should return string when needed", () => {
    const prop = new ListOfNumbersProperty("0 0 100 100");
    expect(prop + "").toEqual("0 0 100 100");
  });

  it("should skip all available white spaces", () => {
    expect(new ListOfNumbersProperty("0\t\t0   100 \n\t\n 100") + "").toEqual("0 0 100 100");
    expect(new ListOfNumbersProperty("    ").value).toEqual([]);
    expect(new ListOfNumbersProperty(null).value).toEqual([]);
  });

  it("should return empty array for null source value", () => {
    expect(new ListOfNumbersProperty(null).value).toEqual([]);
    expect(new ListOfNumbersProperty("").value).toEqual([]);
  });

  it("should cache parsed value", () => {
    const prop = new ListOfNumbersProperty("1 1  1 1");
    const getParsedValue = spyOn(prop, "getParsedValue").and.returnValue([1, 1, 1, 1]);
    prop.value;
    prop.value;
    expect(getParsedValue).toBeCalledTimes(1);
  });
});

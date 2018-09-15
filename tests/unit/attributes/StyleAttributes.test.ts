import {StyleAttributes} from "src/attributes/StyleAttributes";

describe(StyleAttributes, () => {
  it("should return stroke attribute", () => {
    const style = new StyleAttributes([{
      name: "stroke",
      value: "black",
    }] as Attr[]);
    expect(style.stroke).not.toBeUndefined();
  });
});

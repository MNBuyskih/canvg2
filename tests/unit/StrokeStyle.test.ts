import {PaintProperty} from "src/property/PaintProperty";
import {StrokeStyle} from "src/styles/StrokeStyle";

describe(StrokeStyle, () => {
  it("should return PaintProperty as value", () => {
    expect(new StrokeStyle("black").value).toBeInstanceOf(PaintProperty);
  });
});

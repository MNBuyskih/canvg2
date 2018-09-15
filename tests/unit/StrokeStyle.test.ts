import {PaintProperty} from "src/property/PaintProperty";
import {StrokeStyle} from "src/styles/StrokeStyle";
import {mockedCanvg} from "tests/mock";

describe(StrokeStyle, () => {
  it("should return PaintProperty as value", () => {
    expect(new StrokeStyle("black").value).toBeInstanceOf(PaintProperty);
  });

  it("should set strokeColor", () => {
    const canvg = mockedCanvg();
    new StrokeStyle("#ffffff").beforeRender(canvg);
    expect(canvg.context.strokeStyle).toEqual("white");
  });
});

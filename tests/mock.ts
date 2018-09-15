import {CanVG2} from "src/CanVG2";
import {xml} from "tests/xml";

export const mockedCanvas = document.createElement("canvas");
export const mockedContext = mockedCanvas.getContext("2d");

export function mockedCanvg(svg = `<svg/>`) {
  const canvg = new CanVG2(mockedCanvas, xml(svg));
  if (mockedContext) {
    canvg.context = mockedContext;
  }
  return canvg;
}

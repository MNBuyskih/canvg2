const canvas = document.createElement("canvas");
let c = canvas.getContext("2d");
let cntx: CanvasRenderingContext2D;
if (c) {
  cntx = c;
}

// @ts-ignore
export const mockedContext = cntx;

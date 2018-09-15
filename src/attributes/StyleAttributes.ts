import {CanVG2} from "src/CanVG2";
import {AbstractStyle} from "src/styles/AbstractStyle";
import {StrokeStyle} from "src/styles/StrokeStyle";
import {IStyleAttributes} from "src/types/IStyleAttributes";

export class StyleAttributes implements IStyleAttributes {
  private _attr: { [key: string]: AbstractStyle } = {};

  constructor(attributes: Attr[]) {
    this.fillAttributes(attributes);
  }

  get stroke(): StrokeStyle | undefined {
    return this._attr.stroke as StrokeStyle;
  }

  private fillAttributes(attributes: Attr[]) {
    this._attr = attributes
      .reduce((memo, attribute) => {
        const {name, value} = attribute;
        memo[name] = this.getInstanceByName(name as keyof IStyleAttributes, value);
        return memo;
      }, this._attr);
  }

  private getInstanceByName(name: keyof IStyleAttributes, value: string) {
    switch (name) {
      case "stroke":
        return new StrokeStyle(value);
    }
  }

  beforeRender(canvg: CanVG2) {
    Object.keys(this._attr)
      .forEach(styleName => {
        this._attr[styleName].beforeRender(canvg);
      });
  }

  afterRender(canvg: CanVG2) {
    Object.keys(this._attr)
      .forEach(styleName => this._attr[styleName].afterRender(canvg));
  }
}

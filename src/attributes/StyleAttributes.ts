import {StyleAttribute} from "src/attributes/StyleAttribute";
import {AbstractElements} from "src/elements/AbstractElements";
import {IStyleAttributes} from "src/types/IStyleAttributes";

export class StyleAttributes {
  private attributes: { [key: string]: StyleAttribute } = {};

  constructor(attributes: Attr[], private element: AbstractElements) {
    this.fillAttributes(attributes);
  }

  private fillAttributes(attributes: Attr[]) {
    this.attributes = attributes
      .reduce((memo, attribute) => {
        const {name, value} = attribute;
        memo[name] = new StyleAttribute(name as keyof IStyleAttributes, value, this.element);
        return memo;
      }, this.attributes);
  }

  static create(attributes: Attr[], element: AbstractElements): Record<keyof IStyleAttributes, StyleAttribute | undefined> {
    // @ts-ignore
    const attrs = new StyleAttributes(attributes, element) as IStyleAttributes;

    // @ts-ignore
    return new Proxy(attrs, {
      get(target: StyleAttributes, name: keyof IStyleAttributes) {
        return target.get(name);
      },
    });
  }

  get(name: keyof IStyleAttributes): StyleAttribute {
    return this.attributes[name];
  }
}

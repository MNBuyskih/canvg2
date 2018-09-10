import {Attribute} from "Attribute";
import {IAttributes} from "types/IAttributes";
import {IStyleAttributes} from "types/IStyleAttributes";

export class StyleAttributes {
  private attributes: { [key: string]: Attribute } = {};

  constructor(attributes: Attr[]) {
    this.fillAttributes(attributes);
  }

  private fillAttributes(attributes: Attr[]) {
    this.attributes = attributes
      .reduce((memo, attribute) => {
        const {name, value} = attribute;
        memo[name] = new Attribute(name as keyof IAttributes, value);
        return memo;
      }, this.attributes);
  }

  static create(attributes: Attr[]): Record<keyof IStyleAttributes, Attribute | undefined> {
    // @ts-ignore
    const attrs = new StyleAttributes(attributes) as IStyleAttributes;

    // @ts-ignore
    return new Proxy(attrs, {
      get(target: StyleAttributes, name: keyof IStyleAttributes) {
        return target.get(name);
      },
    });
  }

  get(name: keyof IStyleAttributes): Attribute {
    return this.attributes[name];
  }
}

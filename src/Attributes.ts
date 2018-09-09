import {Attribute} from "Attribute";
import {IAttributes} from "types/IAttributes";

export class Attributes {
  private attributes: { [key: string]: Attribute } = {};

  constructor(attributes: NamedNodeMap) {
    this.fillAttributes(attributes);
  }

  static create(attributes: NamedNodeMap): Record<keyof IAttributes, Attribute | undefined> {
    // @ts-ignore
    const attrs = new Attributes(attributes) as IAttributes;

    // @ts-ignore
    return new Proxy(attrs, {
      get(target: Attributes, name: keyof IAttributes) {
        return target.get(name);
      },
    });
  }

  get(name: keyof IAttributes) {
    return this.attributes[name];
  }

  private fillAttributes(attributes: NamedNodeMap) {
    this.attributes = Array.from(attributes)
      .reduce((memo, attribute) => {
        const {name, value} = attribute;
        memo[name] = new Attribute(name as keyof IAttributes, value);
        return memo;
      }, this.attributes);
  }
}

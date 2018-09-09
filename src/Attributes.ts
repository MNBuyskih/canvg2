import {Attribute} from "./Attribute";
import {IAttributes} from "./types/IAttributes";

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
    for (let i = 0; i < attributes.length; i++) {
      const {name, value} = attributes[i];
      this.attributes[name] = new Attribute(name as keyof IAttributes, value);
    }
  }
}

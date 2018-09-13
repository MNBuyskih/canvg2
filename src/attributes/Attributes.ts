import {Attribute} from "src/attributes/Attribute";
import {AbstractElements} from "src/elements/AbstractElements";
import {IAttributes} from "src/types/IAttributes";
import {styleAttributes} from "src/types/styleAttributes";

export class Attributes {
  private attributes: { [key: string]: Attribute } = {};

  constructor(attributes: Attr[], protected element: AbstractElements) {
    this.fillAttributes(attributes);
  }

  static create(attributes: Attr[], element: AbstractElements): Record<keyof IAttributes, Attribute | undefined> {
    // @ts-ignore
    const attrs = new Attributes(attributes, element) as IAttributes;

    // @ts-ignore
    return new Proxy(attrs, {
      get(target: Attributes, name: keyof IAttributes) {
        return target.get(name);
      },
    });
  }

  get(name: keyof IAttributes): Attribute {
    return this.attributes[name];
  }

  private fillAttributes(attributes: Attr[]) {
    this.attributes = attributes
      .reduce((memo, attribute) => {
        const {name, value} = attribute;
        memo[name] = new Attribute(name as keyof IAttributes, value, this.element);
        return memo;
      }, this.attributes);
  }

  static separateAttributes(attrs: Attr[]) {
    const {style, attr} = attrs
      .reduce((memo, attr) => {
        styleAttributes.indexOf(attr.name) >= 0 ?
          memo.style.push(attr) :
          memo.attr.push(attr);
        return memo;
      }, {style: [], attr: []} as { style: Attr[], attr: Attr[] });

    return [style, attr];
  }
}

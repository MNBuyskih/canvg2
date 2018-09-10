import {Attribute} from "Attribute";
import {AbstractElements} from "elements/AbstractElements";
import {IAttributes} from "types/IAttributes";
import {styleAttributes} from "types/styleAttributes";

export class Attributes {
  private attributes: { [key: string]: Attribute } = {};
  private element: AbstractElements;

  constructor(attributes: Attr[], element: AbstractElements) {
    this.element = element;
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
        memo[name] = new Attribute(name as keyof IAttributes, value);
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

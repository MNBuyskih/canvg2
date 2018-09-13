import {AbstractElements} from "src/elements/AbstractElements";

export class ElementsFactoryStore {
  private static _elements: { [id: string]: AbstractElements } = {};

  static add(element: AbstractElements) {
    const id = element.attributes.id ? element.attributes.id.value.value : Object.keys(this._elements).length;
    ElementsFactoryStore._elements[id] = element;
  }

  static get(id: string): AbstractElements | null {
    return ElementsFactoryStore._elements[id] || null;
  }

  static clean() {
    ElementsFactoryStore._elements = {};
  }
}

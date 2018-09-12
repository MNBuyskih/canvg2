import {AbstractElements} from "src/elements/AbstractElements";

export class ElementsFactoryStore {
  private _elements: { [id: string]: AbstractElements } = {};

  add(element: AbstractElements) {
    const id = element.attributes.id ? element.attributes.id.value : Object.keys(this._elements).length;
    this._elements[id] = element;
  }

  get(id: string): AbstractElements | undefined {
    return this._elements[id];
  }
}

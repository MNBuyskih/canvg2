import {AbstractElements} from "elements/AbstractElements";

export class UrlProperty {
  private static _defines: { [id: string]: AbstractElements } = {};

  static define(id: string, element: AbstractElements) {
    if (!UrlProperty._defines[id]) {
      UrlProperty._defines[id] = element;
    }
  }

  static get(id: string): AbstractElements | null {
    return UrlProperty._defines[id] || null;
  }
}

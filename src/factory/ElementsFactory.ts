import {Attributes} from "src/attributes/Attributes";
import {StyleAttributes} from "src/attributes/StyleAttributes";
import {ElementsDummy, ElementsLine, ElementsSvg} from "src/elements";
import {AbstractElements} from "src/elements/AbstractElements";
import {ElementsFactoryStore} from "src/factory/ElementsFactoryStore";

export class ElementsFactory {
  private static store?: ElementsFactoryStore;

  static create(element: HTMLElement, root: boolean = false) {
    if (!ElementsFactory.store) {
      throw new Error("There are no created stores");
    }

    let newElement: any;
    const nodeName = element.nodeName.toLowerCase();

    switch (nodeName) {
      case "svg":
        newElement = new ElementsSvg(element);
        break;
      case "line":
        newElement = new ElementsLine(element);
        break;
      default:
        console.warn(`Unknown element "${nodeName}"`);
        newElement = new ElementsDummy(element);
        break;
    }

    newElement.children = ElementsFactory.getChildren(element);
    [newElement.stylesAttributes, newElement.attributes] = ElementsFactory.getAttributes(element, newElement);
    newElement.root = root;
    ElementsFactory.store.add(newElement);

    return newElement;
  }

  private static getAttributes(element: HTMLElement, newElement: AbstractElements) {
    let [styleAttr, attr] = Attributes.separateAttributes(Array.from(element.attributes));
    let attributes = Attributes.create(attr, newElement);
    let stylesAttributes = StyleAttributes.create(styleAttr, newElement);
    return [stylesAttributes, attributes];
  }

  private static getChildren(element: HTMLElement) {
    return Array.from(element.children)
      .map(child => ElementsFactory.create(child as HTMLElement));
  }

  static createStore() {
    return ElementsFactory.store = new ElementsFactoryStore();
  }

  static getStore() {
    if (!ElementsFactory.store) {
      throw new Error("There are no created stores");
    }
    return ElementsFactory.store;
  }
}

import {ElementsDummy, ElementsLine, ElementsSvg} from "elements";
import {ElementsFactoryStore} from "ElementsFactoryStore";

export class ElementsFactory {
  private static store: ElementsFactoryStore;

  static create(element: HTMLElement, root: boolean = false) {
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
    newElement.root = root;
    return newElement;
  }

  static getChildren(element: HTMLElement) {
    return Array.from(element.children)
      .map(child => ElementsFactory.create(child as HTMLElement));
  }

  static createStore() {
    return ElementsFactory.store = new ElementsFactoryStore();
  }

  static lastStore() {
    if (!ElementsFactory.store) {
      throw new Error("There are no created stores");
    }
    return ElementsFactory.store;
  }
}

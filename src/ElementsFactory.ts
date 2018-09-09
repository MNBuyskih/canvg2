import {ElementsDummy, ElementsSvg} from "elements";

export class ElementsFactory {
  static create(element: HTMLElement) {
    let newElement: any;
    const nodeName = element.nodeName.toLowerCase();

    switch (nodeName) {
      case "svg":
        newElement = new ElementsSvg(element);
        break;
      default:
        console.warn(`Unknown element "${nodeName}"`);
        newElement = new ElementsDummy(element);
        break;
    }

    newElement.children = ElementsFactory.getChildren(element);
    return newElement;
  }

  static getChildren(element: HTMLElement) {
    return Array.from(element.children)
      .map(child => ElementsFactory.create(child as HTMLElement));
  }
}

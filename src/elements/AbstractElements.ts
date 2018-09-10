import {Attribute} from "Attribute";
import {Attributes} from "Attributes";
import {StyleAttributes} from "StyleAttributes";
import {IAttributes} from "types/IAttributes";
import {IStyleAttributes} from "types/IStyleAttributes";

export class AbstractElements {
  // static create: (element: HTMLElement) => (ElementsSvg | ElementsDummy);
  root: boolean = false;
  attributes: Record<keyof IAttributes, Attribute | undefined>;
  stylesAttributes: Record<keyof IStyleAttributes, Attribute | undefined>;
  children: AbstractElements[];

  constructor(private element: HTMLElement) {
    this.getAttributes();
  }

  private getAttributes() {
    const [styleAttributes, attributes] = Attributes.separateAttributes(Array.from(this.element.attributes));
    this.attributes = Attributes.create(attributes);
    this.stylesAttributes = StyleAttributes.create(styleAttributes);
  }
}

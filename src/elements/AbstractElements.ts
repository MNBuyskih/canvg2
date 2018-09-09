import {Attribute} from "Attribute";
import {Attributes} from "Attributes";
import {IAttributes} from "types/IAttributes";

export class AbstractElements {
  // static create: (element: HTMLElement) => (ElementsSvg | ElementsDummy);
  root: boolean = false;
  attributes: Record<keyof IAttributes, Attribute | undefined>;
  children: AbstractElements[];

  constructor(private element: HTMLElement) {
    this.getAttributes();
  }

  private getAttributes() {
    this.attributes = Attributes.create(this.element.attributes);
  }
}

import {Attribute} from "../Attribute";
import {Attributes} from "../Attributes";
import {IAttributes} from "../types/IAttributes";

export class ElementsSvg {
  root: boolean = false;
  attributes: Record<keyof IAttributes, Attribute | undefined>;

  constructor(private element: HTMLElement) {
    this.getAttributes();
  }

  render(context: CanvasRenderingContext2D) {

  }

  private getAttributes() {
    this.attributes = Attributes.create(this.element.attributes);
  }
}

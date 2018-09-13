import {Attribute} from "src/attributes/Attribute";
import {IAttributes} from "src/types/IAttributes";
import {IStyleAttributes} from "src/types/IStyleAttributes";

export class AbstractElements {
  root: boolean = false;
  attributes: Record<keyof IAttributes, Attribute | undefined>;
  stylesAttributes: Record<keyof IStyleAttributes, Attribute | undefined>;
  children: AbstractElements[] = [];

  constructor(private element: HTMLElement) {
  }

}

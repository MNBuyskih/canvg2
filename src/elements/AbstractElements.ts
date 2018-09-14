import {Attribute} from "src/attributes/Attribute";
import {StyleAttributes} from "src/attributes/StyleAttributes";
import {CanVG2} from "src/CanVG2";
import {IAttributes} from "src/types/IAttributes";

export abstract class AbstractElements {
  root: boolean = false;
  attributes: Record<keyof IAttributes, Attribute | undefined>;
  stylesAttributes: StyleAttributes;
  children: AbstractElements[] = [];

  constructor(private element: HTMLElement) {
  }

  public abstract render(canvg: CanVG2): void;
}

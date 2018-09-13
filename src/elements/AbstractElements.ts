import {Attribute} from "src/attributes/Attribute";
import {StyleAttribute} from "src/attributes/StyleAttribute";
import {CanVG2} from "src/CanVG2";
import {IAttributes} from "src/types/IAttributes";
import {IStyleAttributes} from "src/types/IStyleAttributes";

export abstract class AbstractElements {
  root: boolean = false;
  attributes: Record<keyof IAttributes, Attribute | undefined>;
  stylesAttributes: Record<keyof IStyleAttributes, StyleAttribute | undefined>;
  children: AbstractElements[] = [];

  constructor(private element: HTMLElement) {
  }

  public abstract render(canvg: CanVG2): void;
}

import {AbstractElements} from "elements/AbstractElements";
import {Property} from "property/Property";
import {RGBA} from "property/RGBA";

export type IPaintEnums = "none" | " context-fill" | "context-stroke";

export type PaintValue = IPaintEnums | AbstractElements | RGBA | null;

/**
 * https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint
 */
export class PaintProperty extends Property {
  private _parsedValue: PaintValue;

  get value(): PaintValue {
    return this.parsedValue();
  }

  private parsedValue(): PaintValue {
    if (this._parsedValue !== undefined) {
      return this._parsedValue;
    }

    if (this._value === null) {
      return this._parsedValue = "none";
    }

    const value = this._value.trim();

    if (["none", "context-fill", "context-stroke"].indexOf(value) >= 0) {
      return this._parsedValue = value as IPaintEnums;
    }

    if (this.element && value === "child") {
      return this._parsedValue = this.element.children[0] || null;
    }

    if (this.element && /^child\(\d+\)$/.test(value)) {
      const _n = value
        .replace("child(", "")
        .replace(")", "");
      const n = parseFloat(_n) - 1;
      return this._parsedValue = this.element.children[n] || null;
    }

    try {
      return this._parsedValue = new RGBA(this._value);
    } catch (e) {
      return this._parsedValue = null;
    }
  }

}

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

    return this._parsedValue = this.enumValues(value) ||
      this.childValue(value) ||
      this.childNValue(value) ||
      this.colorValue(value)
      ;
  }

  private enumValues(value: string): IPaintEnums | null {
    return ["none", "context-fill", "context-stroke"].indexOf(value) >= 0
      ? (this._parsedValue = value as IPaintEnums)
      : null;
  }

  private childValue(value: string): AbstractElements | null {
    return this.element && value === "child"
      ? (this._parsedValue = this.element.children[0] || null)
      : null;
  }

  private childNValue(value: string): AbstractElements | null {
    if (this.element && /^child\(\d+\)$/.test(value)) {
      const _n = value
        .replace("child(", "")
        .replace(")", "");
      const n = parseFloat(_n) - 1;
      return this._parsedValue = this.element.children[n] || null;
    } else {
      return null;
    }
  }

  private colorValue(value: string): RGBA | null {
    try {
      return this._parsedValue = new RGBA(value);
    } catch (e) {
      return this._parsedValue = null;
    }
  }
}

import {AbstractElements} from "src/elements/AbstractElements";
import {Property} from "src/property/Property";
import {RGBA} from "src/property/RGBA";
import {UrlProperty} from "src/property/UrlProperty";
import {IAttributeValue} from "src/types/IAttributeValue";

export type IPaintEnums = "none" | "context-fill" | "context-stroke";

export type PaintValue = IPaintEnums | AbstractElements | RGBA | UrlProperty | null;

/**
 * https://www.w3.org/TR/SVG/painting.html#SpecifyingPaint
 */
export class PaintProperty extends Property implements IAttributeValue {
  private _parsedValue: PaintValue;

  get value(): PaintValue {
    if (this._parsedValue === undefined) {
      this._parsedValue = this.getParsedValue();
    }
    return this._parsedValue;
  }

  getParsedValue(): PaintValue {
    if (this._value === null) {
      return "none";
    }

    const value = this._value.trim();

    return this.enumValues(value) ||
      this.childValue(value) ||
      this.childNValue(value) ||
      this.colorValue(value) ||
      this.urlValue(value)
      ;
  }

  private enumValues(value: string): IPaintEnums | null {
    return ["none", "context-fill", "context-stroke"].indexOf(value) >= 0
      ? (value as IPaintEnums)
      : null;
  }

  private childValue(value: string): AbstractElements | null {
    return this.element && value === "child"
      ? (this.element.children[0] || null)
      : null;
  }

  private childNValue(value: string): AbstractElements | null {
    if (this.element && /^child\(\d+\)$/.test(value)) {
      const _n = value
        .replace("child(", "")
        .replace(")", "");
      const n = parseFloat(_n) - 1;
      return this.element.children[n] || null;
    } else {
      return null;
    }
  }

  private colorValue(value: string): RGBA | null {
    try {
      return new RGBA(value);
    } catch (e) {
      return null;
    }
  }

  private urlValue(value: string): UrlProperty | null {
    const url = new UrlProperty(value);
    return url.value ? url : null;
  }
}

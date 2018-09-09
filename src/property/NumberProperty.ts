import {Property} from "property/Property";

export type Unit = "px" | "pt" | "pc" | "cm" | "mm" | "in" | "%";

export class NumberProperty extends Property {
  /**
   * Must calculate this
   *
   * const d = document.createElement('div')
   * d.style.width = '1in';
   * document.body.appendChild(d);
   * const dpi = d.offsetWidth;
   * document.body.removeChild(d);
   */
  private static DPI = 96;
  private _parsedValue: number;

  constructor(value: string)
  constructor(value: number, units: Unit)
  constructor(value: string | number | null, units?: Unit) {
    super(value as string);

    if (typeof value == "number") {
      this._parsedValue = value;
    }
    if (units) {
      this._units = units;
    }
  }

  private _units: Unit | null;

  get units(): Unit | null {
    // extract units from value first
    this.parsedValue();
    return this._units;
  }

  get value(): number {
    return this.parsedValue();
  }

  toPixels() {
    const perDPI = this.value * NumberProperty.DPI;
    const inPt = perDPI / 72;

    switch (this.units) {
      case "pt":
        return new NumberProperty(parseFloat(inPt.toFixed(2)), "px");
      case "pc":
        return new NumberProperty(parseFloat((inPt * 12).toFixed(2)), "px");

      case "cm":
        return new NumberProperty(parseFloat((perDPI / 2.54).toFixed(2)), "px");
      case "mm":
        return new NumberProperty(parseFloat((perDPI / 25.4).toFixed(2)), "px");

      case "in":
        return new NumberProperty(perDPI, "px");

      default:
        return new NumberProperty(this.value, "px");
    }
  }

  protected extractUnits(): string {
    const value = (this._value || "").toString().trim();

    if (/^\d+(:?\.\d+)*$/.test(value)) {
      // no units in value
      this._units = null;
      return value;
    }

    if (/%$/.test(value)) {
      this._units = "%";
      return value.substr(0, value.length - 1);
    }

    if (/(px|pt|pc|cm|mm|in)$/.test(value)) {
      this._units = value.substr(-2) as Unit;
      return value.substr(0, value.length - 2);
    }

    this._units = null;
    return value;
  }

  private parsedValue(): number {
    if (this._parsedValue === undefined) {
      if (this._value === null) {
        this._units = null;
        this._parsedValue = 0;
      } else {
        const value = this.extractUnits();
        this._parsedValue = parseFloat(value);
        if (!this._parsedValue) {
          this._parsedValue = 0;
        }
      }
    }

    return this._parsedValue;
  }
}

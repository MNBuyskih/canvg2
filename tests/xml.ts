export function xml(source: string = `<svg/>`): HTMLElement {
  return new DOMParser().parseFromString(source, "text/xml").documentElement;
}

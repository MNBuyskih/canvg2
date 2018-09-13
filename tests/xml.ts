export function xml(source: string): HTMLElement {
  return new DOMParser().parseFromString(source, "text/xml").documentElement;
}

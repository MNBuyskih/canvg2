export function xml(source: string): Document {
  return new DOMParser().parseFromString(source, "text/xml");
}

/**
 * Returns a reference to the Element that scrolls the document.
 * https://developer.mozilla.org/en-US/docs/Web/API/document/scrollingElement
 */
export function getRootScrollElement() {
  return document.scrollingElement ?? document.documentElement;
}

/**
 * Attaches a scroll listener to an element.
 * This method will detect when the passed element is either the `html` or `body` elements.
 * In those cases using `element.addEventListener` would fail since the `scroll` event is only emitted at the `window`
 * level. The solution is to attach the listener to the `window` but still bind the original element to the listener so
 * that the client code can use its properties like usual (for example, use scrollTop).
 */
export function addScrollEventListener(element: Element, listener: (this: Element) => void) {
  const targetElement =
    element instanceof HTMLHtmlElement || element instanceof HTMLBodyElement ? window : element;
  const boundListener = listener.bind(element);
  targetElement.addEventListener('scroll', boundListener);
  return () => targetElement.removeEventListener('scroll', boundListener);
}

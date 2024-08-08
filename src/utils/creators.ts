let d: Document = document;

/**
 * Creates a new DocumentFragment.
 * @returns {DocumentFragment} A new DocumentFragment.
 */
export const newDFrag = (): DocumentFragment => d.createDocumentFragment();

/**
 * Creates a new TextNode.
 * @param {string} s - The text content for the TextNode.
 * @returns {Text} A new TextNode with the specified text content.
 */
export const newTextNode = (s: string): Text => d.createTextNode(s);

/**
 * Creates a new Element.
 * @param {string} t - The tag name for the Element.
 * @returns {HTMLElement|HTMLStyleElement} A new Element with the specified tag name.
 */
export const newElement = (t: string): HTMLElement | HTMLStyleElement => d.createElement(t);
/**
 * Appends multiple children to a parent element.
 * @param {Node} p - The parent element.
 * @param {Node | DocumentFragment} c - Child element or DocumentFragment to be appended.
 */
export const childAppender = (p: Node, c: Node | DocumentFragment) => p.appendChild(c);

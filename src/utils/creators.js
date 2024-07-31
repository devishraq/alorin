// @ts-nocheck
import { isFunc } from "./checkers";
import "./loopers";

let d = document;

/**
 * Creates a new DocumentFragment.
 * @returns {DocumentFragment} A new DocumentFragment.
 */
export const newDFrag = () => d.createDocumentFragment();

/**
 * Creates a new TextNode.
 * @param {string} s - The text content for the TextNode.
 * @returns {Text} A new TextNode with the specified text content.
 */
export const newTextNode = s => d.createTextNode(s);

/**
 * Creates a new Element.
 * @param {string} t - The tag name for the Element.
 * @returns {HTMLElement} A new Element with the specified tag name.
 */
export const newElement = t => d.createElement(t);

/**
 * Appends multiple children to a parent element.
 * @param {HTMLElement|DocumentFragment} p - The parent element.
 * @param {Array<HTMLElement|Function>} c - An array of child elements or functions returning child elements.
 */
export const childAppender = (p, c) => {
  c.forEach(c => {
    if (isFunc(c)) c = c();
    p.appendChild(c);
  });
};

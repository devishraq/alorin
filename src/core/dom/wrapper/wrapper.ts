import { newDFrag } from "../../../utils";

/**
 * Wraps multiple *Alorin* elements into a single DocumentFragment.
 *
 * @param {...Node} childrens - The elements to wrap.
 * @returns {DocumentFragment} The newly created DocumentFragment containing all the elements.
 */
export const wrapper = (...childrens) => newDFrag();

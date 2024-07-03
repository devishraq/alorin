/**
 * Wraps multiple *Olka* elements into a single DocumentFragment.
 *
 * @param {...Node} childrens - The elements to wrap.
 * @returns {DocumentFragment} The newly created DocumentFragment containing all the elements.
 */
export const wrapper = (...childrens) => {
  // Create a new document fragment.
  const fragment = document.createDocumentFragment();
  // Return the document fragment containing all the elements.
  return fragment;
};

 
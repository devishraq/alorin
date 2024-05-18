/**
 * Creates a new *Olka* element with the given tag and children.
 *
 * @param {string|function} tag - The tag name of the element to create or a function that returns an element.
 * @param {Object} [props] - (Optional) An object containing properties to set on the element.
 * @param {...Node} childrens - The children to append to the element.
 * @returns {Node} The newly created element.
 */

export const createElement = (tag, props, ...childrens) => {
  // Create a new document fragment.
  // This is used to efficiently append multiple children to the element.
  const fragment = document.createDocumentFragment();

  // Declare a variable to hold the child node & the element.
  let element, childNode;
  // If the props object is not provided, set it to an empty object.
  // let _props = props || {};

  // Check if the tag is a function (i.e., a component)
  if (typeof tag === "function") {
    // Call the function to get the element it returns
    element = tag(props, ...childrens);
  } else {
    // Otherwise, create a new element with the given tag
    element = document.createElement(tag);

    // If the props object is provided, set the properties on the element.
    if (props != null) {
      // 
      for (const attribute in props) {
        attribute === "style"
          ? Object.assign(element.style, props.style)
          : element.setAttribute(attribute, props[attribute]);
      }
    }
  }
  // Iterate over each child node.
  childrens.forEach((node) => {
    // If the node is a string, create a text node and append it to the fragment.
    if (typeof node === "string") {
      childNode = document.createTextNode(node);
      fragment.appendChild(childNode);
    }

    // If the node is neither a string nor a function, append it directly to the fragment.
    else {
      fragment.appendChild(node);
    }
  });

  // Append the fragment, which contains all the child nodes, to the element & return it!
  element.appendChild(fragment);
  return element;
};

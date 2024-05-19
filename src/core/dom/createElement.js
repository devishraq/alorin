// Import the nanoid function for generating unique data-keys.
import { nanoid } from "nanoid";

/**
 * Creates a new *Olka* element with the given tag and children.
 *
 * @param {string|function} tag - The tag name of the element to create or a function that returns an element.
 * @param {Object} [props] - (Optional) An object containing properties to set on the element.
 * @param {...Node} childrens - The children to append to the element.
 * @returns {Node} The newly created element.
 */

export const createElement = (tag, props, ...childrens) => {
  // Create a document fragment to hold the child nodes.
  const fragment = document.createDocumentFragment();

  // Declare variables for the new element and a child node.
  let element, childNode;

  // Generate a unique ID for the element.
  let element_id = nanoid(15);

  // Check if the tag is a function (i.e., a component), call it. Otherwise, create a new element with the tag name.
  if (typeof tag === "function") {
    element = tag(props, ...childrens);
  } else {
    element = document.createElement(tag);
    // Set the data-key attribute to the unique ID.

    element.setAttribute("data-key", element_id);

    // If the props object is provided, set the properties on the element.
    if (props != null) {
      for (const attribute in props) {
        // If the attribute is "style", merge the styles. Otherwise, set the attribute.

        attribute === "style"
          ? Object.assign(element.style, props.style)
          : element.setAttribute(attribute, props[attribute]);
      }
    }
  }

  // Append each child node to the document fragment.
  childrens.forEach((node) => {
    // If the node is an object (e.g., another DOM element), append it directly to the fragment.
    if (typeof node === "object") {
      fragment.appendChild(node);
    }

    // If the node is not an object (e.g., a string), create a text node and append it to the fragment.
    else {
      childNode = document.createTextNode(node);
      fragment.appendChild(childNode);
    }
  });

  // After all child nodes have been appended to the fragment, append the fragment to the main element.
  element.appendChild(fragment);

  // Return the newly created element with all its children.
  return element;
};

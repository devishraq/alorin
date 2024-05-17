/**
 * Creates a new HTML element with the given tag, properties, and children.
 *
 * @param {string} tag - The tag name of the element to create.
 * @param {Object} props - An object containing properties to set on the element.
 * @param {...Node} childrens - The children to append to the element.
 * @returns {Node} The newly created element.
 */

export const createElement = (tag, props, ...childrens) => {
  // Create a new element with the given tag.
  const element = document.createElement(tag);

  // Create a new document fragment.
  // This is used to efficiently append multiple children to the element.
  const fragment = document.createDocumentFragment();

  // Declare a variable to hold the child node.
  let childNode;

  // Iterate over each child node.
  childrens.forEach((node) => {
    // If the node is a string, create a text node and append it to the fragment.
    if (typeof node == "string") {
      childNode = document.createTextNode(node);
      fragment.appendChild(childNode);
    }
    // If the node is a function, execute it, create a text node from the result, and append it to the fragment.
    // else if (typeof node == "function") {
    //   childNode = document.createTextNode(node());
    //   fragment.appendChild(childNode);
    // }
    // If the node is neither a string nor a function, append it directly to the fragment.
    else {
      fragment.appendChild(node);
    }
  });

  // Append the fragment, which contains all the child nodes, to the element & return it!
  element.appendChild(fragment);
  return element;
};

// devishraq: Easy code, huh? 😄

// import signalHandler
// import { signalHandler } from "../../../reactivity";

import { isNode, isNUB, childAppender } from "../../../../utils";
import "../../../../utils/loopers";

export const processNestedChildren = (child, fragment) => {
  child.forEach(node => {
    let childToAppend = null;

    // If child is null or undefined or bool, f**k it
    if (isNUB(node)) return;

    // if child is a node element (html-element) add for fragment addition!
    if (isNode(node)) childToAppend = node;

    if (childToAppend) childAppender(fragment, childToAppend);
  });
};

// Readability matters a lot!

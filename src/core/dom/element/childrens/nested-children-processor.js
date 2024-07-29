// import signalHandler
// import { signalHandler } from "../../../reactivity";

import { isNode, isNUB } from "../../../../utils/checkers";

export const processNestedChildren = (child, fragment) => {
	child.forEach((node) => {
		let childToAppend = null;

		// If child is null or undefined or bool, f**k it
		if (isNUB(node)) return;

		// if child is a node element (html-element) add for fragment addition!
		if (isNode(node)) childToAppend = node;
        
		if (childToAppend) fragment.appendChild(childToAppend);
	});
};

// Readability matters a lot!
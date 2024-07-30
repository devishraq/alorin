// import signalHandler
// import { signalHandler } from "../../../reactivity";

import { isNode, isNUB } from "../../../../utils";
import { childAppender } from "../../../../utils/creators";
import "../../../../utils/loopers";

export const processNestedChildren = (child, fragment) => {
	child.For((node) => {
		let childToAppend = null;

		// If child is null or undefined or bool, f**k it
		if (isNUB(node)) return;

		// if child is a node element (html-element) add for fragment addition!
		if (isNode(node)) childToAppend = node;

		if (childToAppend) childAppender(fragment, childToAppend);
	});
};

// Readability matters a lot!

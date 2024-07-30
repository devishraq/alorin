import { signalHandler } from "../../signal/index.js";
import { createEffect } from "../../../reactivity/signal/index.js";
import { processNestedChildren } from "./";
import { isArr, isFunc, isNode, isNUB, newTextNode } from "../../../../utils";
import { childAppender } from "../../../../utils/creators.js";

export const processChildrens = (childrens, fragment) => {
	childrens.forEach((node) => {
		let childToAppend = null;

		// If node is null or undefined or bool, f**k it
		if (isNUB(node)) return;

		switch (true) {
			case isArr(node):
				processNestedChildren(node, fragment);
				break;

			case isNode(node):
				childToAppend = node;
				break;

			case isFunc(node):
				if (node.isSignal)
					childToAppend = signalHandler(node, fragment);
				else childToAppend = node();
				break;

			default:
				childToAppend = newTextNode(node);
				break;
		}

		// If childNode is not null or undefined, append it to the fragment
		if (childToAppend) childAppender(fragment, childToAppend);
	});
};

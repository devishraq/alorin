import { signalHandler } from "../../signal/index.js";
import { createEffect } from "../../../reactivity/signal/index.js";
import { processNestedChildren } from "./";
import { isArr, isFunc, isNode, isNUB, newTextNode } from "../../../../utils/index.js";

export const processChildrens = (childrens, fragment) => {
	childrens.forEach((node) => {
		let childNode = null;

		// If node is null or undefined or bool, f**k it
		if (isNUB(node)) return;

		switch (true) {
			case isArr(node):
				processNestedChildren(node, fragment);
				break;

			case isNode(node):
				childNode = node;
				break;

			case isFunc(node):
				if (node.isSignal)
					childNode = signalHandler(node, fragment);
				else childNode = node();
				break;

			default:
				childNode = newTextNode(node);
				break;
		}

		// If childNode is not null or undefined, append it to the fragment
		if (childNode) fragment.appendChild(childNode);
	});
};

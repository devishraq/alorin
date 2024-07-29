import { newTextNode } from "../../../utils";
import { createEffect } from "../../reactivity/signal";

export const signalHandler = (node, fragment) => {
	const textNode = newTextNode("");
	createEffect(() => {
		const value = node();
		textNode.textContent = String(value);
	});
	fragment.appendChild(textNode);
};

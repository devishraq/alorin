import { propsHandler } from "./props";
import { processChildrens } from "./childrens";

export const createElement = (tag, props, ...childrens) => {
	let _props = props || {};

	const fragment = document.createDocumentFragment();
	let element, childNode;

	if (typeof tag === "function") {
		element = tag(_props, ...childrens);
	} else {
		element = document.createElement(tag);
		propsHandler(_props, element);
	}

	processChildrens(childrens, fragment, childNode);
	element.appendChild(fragment);
	return element;
};

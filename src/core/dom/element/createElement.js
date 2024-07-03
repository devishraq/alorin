import { propsHandler } from "./props";
import { processChildrens } from "./childrens";

export const createElement = (tag, props, ...childrens) => {
	let _props = props || {};

	const fragment = document.createDocumentFragment();
	let element;

	if (typeof tag === "function") {
		element = tag(_props, ...childrens);
	} else {
		element = document.createElement(tag);
		propsHandler(_props, element);
	}

	processChildrens(childrens, fragment);
	element.appendChild(fragment);
	return element;
};

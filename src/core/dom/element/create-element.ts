import { propsHandler } from "./props";
import { processChildrens } from "./childrens";
import { isFunc, newElement, newDFrag, childAppender } from "../../../utils";
import { createEffect } from "../../reactivity";

export const createElement = (tag, props, ...childrens) => {
	let _props = props || {},
		fragment = newDFrag(),
		element;

	if (isFunc(tag)) {
		element = tag(_props, ...childrens);
	} else {
		element = newElement(tag);
		propsHandler(_props, element);
	}
	processChildrens(childrens, fragment);

	if (element) childAppender(element, fragment);
	return element;
};

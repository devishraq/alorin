import { createEvent } from "../dom";
import { signalHandler } from "./signalHandler";


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

// Props Handling

const propsHandler = (elementProps, element) => {
	if (elementProps != null) propsAttributeHandler(elementProps, element);
	propsEventsHandler(elementProps, element);
};

const propsAttributeHandler = (elementProps, element) => {
	for (const attribute in elementProps) {
		if (attribute == "style") {
			propsStyleHandler(elementProps, element);
		} else {
			attribute === "children"
				? null
				: element.setAttribute(
					attribute,
					elementProps[attribute]
				);
		}
	}
};

const propsStyleHandler = (elementProps, element) => {
	if (typeof elementProps.style === "string") {
		element.style.cssText = elementProps.style;
	} else {
		Object.assign(element.style, elementProps.style);
	}
};

const propsEventsHandler = (elementProps, element) => {
	createEvent(elementProps, element);
}


// Child Processing
const processChildrens = (childrens, fragment, childNode) => {
	childrens.forEach((node) => {
		if (Array.isArray(node)) {
			processChildOfChildrens(node, fragment);
		} else if (node == null) {
			return;
		} else if (node instanceof Node) {
			fragment.appendChild(node);
		} else if (typeof node === "function") {
			node.isSignal
				? signalHandler(node, fragment)
				: fragment.appendChild(node(elementProps));
		} else {
			if (node !== undefined) {
				childNode = document.createTextNode(node);
				fragment.appendChild(childNode);
			} else {
				return;
			}
		}
	});
};

const processChildOfChildrens = (child, childNode) => {
	child.forEach((child) => {
		if (child instanceof Node) {
			fragment.appendChild(child);
		} else if (typeof child === "function") {
			const childElement = child(elementProps);
			if (childElement instanceof Node) {
				fragment.appendChild(childElement);
			}
		} else {
			childNode = document.createTextNode(child);
			fragment.appendChild(childNode);
		}
	});
};



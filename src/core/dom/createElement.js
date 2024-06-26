import { createEvents } from "../dom";
import { createEffect } from "../reactivity";

const fragment = document.createDocumentFragment();
let element, childNode;

export const createElement = (tag, props, ...childrens) => {
	let _props = props || {};

	if (typeof tag === "function") {
		element = tag(_props, ...childrens);
	} else {
		element = document.createElement(tag);
		propsHandler(_props);
	}

	processChildrens(childrens);

	element.appendChild(fragment);

	return element;
};


// Props Handling

const propsHandler = (elementProps) => {
	if (elementProps != null) {
		propsAttributeHandler(elementProps);
	}
	propsEventsHandler(elementProps);
};


const propsAttributeHandler = (elementProps) => {
	for (const attribute in elementProps) {
		if (attribute == "style") {
			propsStyleHandler(elementProps);
		} else {
			attribute === "children" ? null : element.setAttribute(attribute, elementProps[attribute]);
		}
	}
}

const propsStyleHandler = (elementProps) => {
	typeof elementProps.style == "string"
		? (element.style.cssText = elementProps.style)
		: Object.assign(element.style, elementProps.style);
};

const propsEventsHandler = (elementProps) => {
	const isEventAvailable = Object.keys(elementProps).some((key) => key.startsWith("on"));

	if (isEventAvailable) {
		createEvents(elementProps, element);
	}
};


// Child Processing

const processChildrens = (childrens) => {
	childrens.forEach((node) => {
		if (Array.isArray(node)) {
			processChildOfChildrens(node)
		} else if (node == null) {
			return;
		} else if (node instanceof Node) {
			fragment.appendChild(node);
		} else if (typeof node === "function") {
			if (node.isSignal) {
				signalHandler(node);
			}
			else {
				const childElement = node(elementProps);
				fragment.appendChild(childElement);
			}
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

const processChildOfChildrens = (child) => {
	child.forEach((child) => {
		if (child instanceof Node) {
			fragment.appendChild(child);
		} else if (typeof child === "function") {
			const childElement =
				child(elementProps);
			if (childElement instanceof Node) {
				fragment.appendChild(
					childElement
				);
			}
		} else {
			childNode =
				document.createTextNode(child);
			fragment.appendChild(childNode);
		}
	});
}


const signalHandler = (node) => {
	const textNode = document.createTextNode("");
	createEffect(() => {
		textNode.textContent = node();
	});
	fragment.appendChild(textNode);
}
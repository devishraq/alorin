import { nanoid } from "nanoid";
import { createEvents } from "./createEvents";

export const createElement = (tag, props, ...childrens) => {
	const fragment = document.createDocumentFragment();
	let element, childNode;
	let element_id = nanoid(5);
	let _props = props || {};

	if (typeof tag === "function") {
		element = tag(_props, ...childrens);
	} else {
		element = document.createElement(tag);

		if (_props != null) {
			for (const attribute in _props) {
				if (attribute === "style") {
					typeof _props.style === "string"
						? (element.style.cssText =
								_props.style)
						: Object.assign(
								element.style,
								_props.style
						  );
				} else {
					if (attribute === "children") {
						continue;
					} else {
						element.setAttribute(
							attribute,
							_props[attribute]
						);
					}
				}
			}
		}
		createEvents(_props, element);
	}

	const processNode = (node, props) => {
		if (typeof node === "object") {
			fragment.appendChild(node);
		} else if (typeof node === "function") {
			const childElement = child(props);
			fragment.appendChild(childElement);
		} else {
			childNode = document.createTextNode(node);
			fragment.appendChild(childNode);
		}
	};

	childrens.forEach((node) => {
		if (Array.isArray(node)) {
			node.forEach((child) => {
				processNode(child, _props);
			});
		} else {
			childNode = processNode(node, _props);
			fragment.appendChild(childNode);
		}
	});

	element.appendChild(fragment);
	return element;
};

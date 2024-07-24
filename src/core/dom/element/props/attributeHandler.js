/**
 * Handles the assignment of attributes to a given DOM element based on the provided properties.
 * This function iterates over each property in the `elementProps` object and applies it to the `element`.
 * Special handling is provided for certain types of attributes:
 * - `style`: Delegates to `styleHandler` for applying style properties.
 * - Event listeners (`on` prefix) and `children` properties are ignored and not directly set as attributes since they are  handled separately.
 *
 *
 * @param {Object} elementProps - An object containing properties and values to be applied to the element.
 *                                This can include standard HTML attributes, styles, and event listeners.
 *
 * @param {HTMLElement} element - The DOM element to which the attributes will be applied.
 *
 */

import { isNUB } from "../../../../utils/checkers";
import { styleHandler } from "./";
// import { createEffect } from "../../../reactivity";
// import { signalHandler } from "../../signal";

export const attributeHandler = (elementProps, element) => {
	const booleanAttributes = new Set([
		"checked",
		"selected",
		"disabled",
		"readonly",
		"required",
		"multiple",
		"autofocus",
		"hidden",
		"contenteditable",
		"spellcheck",
		"draggable",
		"open",
		"async",
		"defer",
		"reversed",
	]);

	for (const attribute in elementProps) {
		// If the attribute is null or undefined or event, ignore it.
		if (
			isNUB(attribute) ||
			attribute === "children" ||
			attribute.startsWith("on")
		)
			null;
		// If the attribute is 'style', delegate to the styleHandler. else, set the attribute directly.
		else if (attribute === "style") styleHandler(elementProps, element);
		else if (attribute === "className")
			element.setAttribute("class", elementProps[attribute]);
		else if (booleanAttributes.has(attribute)) {
			elementProps[attribute]
				? element.setAttribute(attribute, "")
				: element.removeAttribute(attribute);
		}

		// This is code can be infected ...... have to change to the earlier version if it goes f**ked up!
		else if (isNUB(elementProps[attribute])) {
			element.setAttribute(attribute, false);
		} else element.setAttribute(attribute, elementProps[attribute]);
	}
};

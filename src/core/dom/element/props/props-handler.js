/**
 * Handles the props of an elements including attributes and event listeners.
 *
 * @param {Object} elementProps - The props to be handled.
 * @param {HTMLElement} element - The element to apply the props to.
 */

import { eventHandler, attributeHandler } from ".";

export const propsHandler = (elementProps, element) => {
	if (elementProps) attributeHandler(elementProps, element);

	eventHandler(elementProps, element);
};

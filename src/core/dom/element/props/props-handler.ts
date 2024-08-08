/**
 * Handles the props of an elements including attributes and event listeners.
 *
 * @param {Object} elementProps - The props to be handled.
 * @param {HTMLElement} element - The element to apply the props to.
 */

import { attributeHandler } from ".";

export const propsHandler = (elementProps, element) => {
      console.log(elementProps);
	if (elementProps) attributeHandler(elementProps, element);
};

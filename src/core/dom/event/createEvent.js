/**
 * Adds event listeners to a DOM element based on the provided props.
 *
 * @param {object} props - An object containing properties, where keys that start with "on" are considered event handlers.
 * @param {Node} element - The DOM element to add event listeners to.
 */

import { isArr } from "../../../utils/checkers";

export const createEvent = (props, element) => {
 	// Filter the props to get an array of [key, value] pairs for the event handlers.
	const events = Object.entries(props).filter(([key]) =>
		key.startsWith("on")
	);
	// For each event handler, add an event listener to the element.
	// The event type is the key without the "on" prefix and in lowercase.
	// The event listener calls the callback handler when the event occurs.
	events.forEach(([key, callbackHandler]) => {
		if (isArr(callbackHandler)) {
			callbackHandler.forEach((callback) => {
				element.addEventListener(
					key.toLowerCase().slice(2),
					callback
				);
			});
		} else {
			// Add an event listener to the element.
			element.addEventListener(
				// The event type is the key without the "on" prefix and in lowercase.
				key.toLowerCase().slice(2),
				// The event listener calls the callback handler when the event occurs.
				callbackHandler
			);
		}
	});

	// This function does not return anything. (Just Create Events based on Props)
};

// Path: src/core/dom/createTextElement.js

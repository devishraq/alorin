/**
 * Adds event listeners to a DOM element based on the provided props.
 *
 * @param {object} props - An object containing properties, where keys that start with "on" are considered event handlers.
 * @param {Node} element - The DOM element to add event listeners to.
 */

import { isArr } from "../../../utils";
import "../../../utils/loopers";
export const createEvent = (props, element) => {
	// Filter the props to get an array of [key, value] pairs for the event handlers.
	console.log("props", props);
	const isNativeEvent = (key) => `on${key}` in HTMLElement.prototype;

	const events = Object.entries(props).filter(([key]) =>
		key.startsWith("on")
	);

	events.forEach(([key, callbackHandler]) => {
		const eventName = key.slice(2).toLowerCase();
		if (isNativeEvent(eventName)) {
			if (isArr(callbackHandler)) {
				callbackHandler.For((callback, i, a) => {
					element.addEventListener(eventName, callback);
					console.log(i, a);
				});
			} else {
				element.addEventListener(eventName, callbackHandler);
			}
		}
	});

	// This function does not return anything. (Just Create Events based on Props)
};

// Path: src/core/dom/createTextElement.js

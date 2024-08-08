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
	const isNativeEvent = (key) => `on${key}` in HTMLElement.prototype,
		adv = (eN, cB) => element.addEventListener(eN, cB);

	Object.entries(props)
		.filter(([key]) => key.startsWith("on"))
		.forEach(([key, cB]) => {
			const eN = key.slice(2).toLowerCase();
			if (isNativeEvent(eN)) {
				if (isArr(cB)) {
					// @ts-ignore
					cB.For((callback) =>
						adv(eN, callback)
					);
				} else {
					adv(eN, cB);
				}
			}
		});

	// This function does not return anything. (Just Create Events based on Props)
};

// Path: src/core/dom/event/create-event.js

// @ts-nocheck
import { alorin, createEffect } from "../..";

/**
 * A utility display component for conditionally rendering children based on a given condition.
 *
 * @module Show
 * @function
 * @param {object} [props = {}] - Property Object
 * @param {boolean} [props.condition=true] - Determines if the children should be rendered.
 * @param {number | null} [props.delay = 0] - Delay before rendering (not implemented)
 * @param {import("@swc/core").JSXElement | null} [props.children = null] - The content to be conditionally rendered.
 * @param {import("@swc/core").JSXElement | null} [props.fallback = null] - Fallback content if condition is false
 * @param {Function | null} [props.onShow = () => {}] - Callback when content is shown
 * @param {Function | null} [props.onHide = () => {}] - Callback when content is hidden
 * @returns {import("@swc/core").JSXElement | null} The children if the condition is true; otherwise, fallback or null.
 */
export const Display = (props) => {
	const {
		condition = true,
		delay = 0,
		children = null,
		fallback = null,
		onShow = () => {},
		onHide = () => {},
	} = props;

	if (condition && delay) {
		setTimeout(() => {
			onShow();
			return <>{children}</>;
		}, delay);
	} else if (condition && !delay) {
		onShow();
		return <>{children}</>;
	} else {
		onHide();
	}
	return fallback;
};

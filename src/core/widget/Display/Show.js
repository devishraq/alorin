import { alorin } from "../..";

/**
 * A utility display component for conditionally rendering childrens based on a given condition.
 *
 * @module Show
 * @function
 * @param {Object} props - The properties object.
 * @param {boolean} [props.condition=true] - Determines if the children should be rendered.
 * @param {any} [props.children=null] - The content to be conditionally rendered.
 * @returns {HTMLElement|null} The children if the condition is true; otherwise, null.
 */

export const Show = (props) => {
	const { condition = true, children = null } = props;

	return condition == true ? <>{children}</> : null;
};

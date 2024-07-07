import { createElement } from "./../dom";
import { generateClass } from "./generateClass";
import { insertRule } from "./insertRule";

// createStyle function to createStyling according to tag & styles, className is auto-genrated from @generateClass function.
export const createStyle = (tag) => (styles) => {
	// generator function
	const className = generateClass(tag);

	// CSS styles to pushed to css stylesheet
	insertRule(className, styles.join(""));

	// Returning newly created element with the help of @createElement class
	return (props) => createElement(tag, { ...props, class: className });
};

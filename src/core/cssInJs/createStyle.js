import { createElement } from "./../dom/createElement";
import { generateClass } from "./generateClass";
import { insertRule } from "./insertRule";

export const createStyle = (tag) => (styles) => {
	const className = generateClass(tag);

	insertRule(className, styles.join(""));
	return (props) => createElement(tag, { ...props, class: className });
};

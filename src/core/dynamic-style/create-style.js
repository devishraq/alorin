import { createElement } from "../dom";
import { insertRule } from "./insert-rule";
import { nanoid } from "nanoid";

export const createStyle = (tag) => (styles) => {
	// generator function

	const cN = `$__${tag}__${nanoid(5)}`;
	insertRule(cN, styles.join(""));
	return (props) => createElement(tag, { ...props, class: cN });
};

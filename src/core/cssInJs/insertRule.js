/**
 * This module exports the `insertRule` function, which is used to insert a new CSS rule into the first stylesheet of the document.
 */

/**
 * Inserts a new CSS rule into the first stylesheet of the document.
 *
 * @param {string} className - The class name for the new rule.
 * @param {string} styles - The CSS styles for the new rule, as a string.
 */
export const insertRule = (className, styles) => {
	// Get the first stylesheet in the document.
	const styleSheet = document.styleSheets[0];

	// Create the CSS rule string by concatenating the class name and styles.
	// Replace newline characters in the styles string with nothing. more like to cut the \n portion of the string.
	const cssRule = `.${className} ${styles.replace(/\n/g, "")}`;

	// Insert the new rule into the stylesheet at the end.
	styleSheet.insertRule(cssRule, styleSheet.cssRules.length);
};

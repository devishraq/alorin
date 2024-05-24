/**
 *
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
	let styleSheet;

	// Check if there is a stylesheet in the document. If not, create a new one.
	styleSheet = document.styleSheets[0];

	// If there is no stylesheet in the document, create a new one.
	if (!styleSheet) {
		// Create a new style element and append it to the head of the document.
		const style = document.createElement("style");
		document.head.appendChild(style);
		styleSheet = style.sheet;
	}
	// Create the CSS rule string by concatenating the class name and styles.
	// Replace newline characters in the styles string with nothing. more like to cut the \n portion of the string.

	// The `insertRule` method requires the styles to be on a single line.
	const formattedStyles = styles.replace(/\n/g, "");
	// Insert the new rule into the stylesheet at the end.
	styleSheet.insertRule(
		`.${className} { ${formattedStyles} }`,
		styleSheet.cssRules.length
	);
};

// Import the nanoid function for generating unique IDs.

import { nanoid } from "nanoid";

/**
 * Generates a unique class name based on the provided tag.
 *
 * @param {string} tag - The base name for the class.
 * @returns {string} The generated class name.
 */

export const generateClass = (tag) => {
	return `__${tag}__${nanoid(5)} `;
};

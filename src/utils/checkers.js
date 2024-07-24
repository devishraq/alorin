// isArr(node) - it's the array checkers
// isNUB(node) - N-null, U-undefined, B-Boolean. it's the NUB checkers

export const isArr = (a) => Array.isArray(a);
export const isNUB = (h) =>
	h === null || h === undefined || h === false || h === true;
export const isNode = (n) => n instanceof Node;
export const isFunc = (f) => typeof f === "function";
export const isStr = (s) => typeof s === "string";
export const isObj = (n) => typeof n === "object";

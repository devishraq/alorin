/**
 *
 * This file serves as an entry points for various handlers related to DOM element's Props(properties) handling.
 *
 * It re-exports functions from separate modules, making them accessible from a single entry point.
 *
 * - `propsHandler`: Sourced from './propsHandler', it handles the assignment of properties to elements, beyond standard attributes.
 * - `attributeHandler`: Imported from './attributeHandler', it is responsible for applying attributes to a DOM element.
 *
 * - `styleHandler`: Imported from './styleHandler', this function deals with applying style properties to the elements.
 *
 */

export { propsHandler } from "./props-handler";
export { attributeHandler } from "./attribute-handler";
export { styleHandler } from "./style-handler";

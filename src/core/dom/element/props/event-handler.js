/**
 * This function is responsible for handling event-related properties from `elementProps` and applying them to the specified `element`.
 * 
 * @param {Object} elementProps - An object containing properties, including event handlers, to be applied to the element.
 * @param {HTMLElement} element - The DOM element to which the event handlers will be attached.
 */

import { createEvent } from '../../event';

export const eventHandler = (elementProps, element) => {
    createEvent(elementProps, element);
}

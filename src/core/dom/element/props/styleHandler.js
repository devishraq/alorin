/**
 * This function is used to apply styles to a DOM element. It's actually handle style attribute both as a string and as an object. (e.g. {color: 'red', fontSize: '16px'} or 'color: red; font-size: 16px;')
 * 
 * @param {Object} elementProps - An object containing properties to be applied to the element.
 * @param {HTMLElement} element - The DOM element to which the styles will be applied.
 */

import { createSignal, createEffect } from "../../../reactivity";

export const styleHandler = (elementProps, element) => {

    let elemStyle = element.style,
        elemePropStyle = elementProps.style;


    // @ts-ignore
    if (typeof elemStyle === "string") elemStyle.cssText = elemePropStyle;
    else Object.assign(elemStyle, elemePropStyle);

};

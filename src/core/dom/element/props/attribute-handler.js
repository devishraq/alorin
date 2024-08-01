/**
 * Handles the assignment of attributes to a given DOM element based on the provided properties.
 * This function iterates over each property in the `elementProps` object and applies it to the `element`.
 * Special handling is provided for certain types of attributes:
 * - `style`: Delegates to `styleHandler` for applying style properties.
 * - Event listeners (`on` prefix) and `children` properties are ignored and not directly set as attributes since they are  handled separately.
 *
 *
 * @param {Object} elementProps - An object containing properties and values to be applied to the element.
 *                                This can include standard HTML attributes, styles, and event listeners.
 *
 * @param {HTMLElement} element - The DOM element to which the attributes will be applied.
 *
 */

import { isNUB } from "../../../../utils/checkers";
import { styleHandler } from "./";
import { booleanAttributeBits } from "./constants";
import { createEvent } from "../../event";

export const attributeHandler = (elementProps, element) => {
  const isBooleanAttribute = attr => !!booleanAttributeBits[attr],
    setAttr = (aT, vL) => element.setAttribute(aT, vL),
    rmAttr = aT => element.removeAttribute(aT);

  for (const attribute in elementProps) {
    switch (true) {
      case isNUB(attribute) || attribute === "children":
        break;

      case attribute.startsWith("on"):
        createEvent(elementProps, element);
        break;

      case attribute === "style":
        styleHandler(elementProps, element);
        break;

      case attribute === "className":
        setAttr("class", elementProps[attribute]);
        break;

      case isBooleanAttribute(attribute):
        elementProps[attribute] ? setAttr(attribute, elementProps[attribute]) : rmAttr(attribute);
        break;

      default:
        setAttr(attribute, elementProps[attribute]);
        break;
    }
  }
};

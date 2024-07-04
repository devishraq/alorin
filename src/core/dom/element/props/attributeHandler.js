import { styleHandler } from "./";

export const attributeHandler = (elementProps, element) => {
    for (const attribute in elementProps) {
        console.log(attribute.slice(2).toLowerCase());
        if (attribute == null || attribute == undefined) null;
        if (attribute == "style") styleHandler(elementProps, element);
        else if (attribute.startsWith('on') || attribute == "children") null;
        else element.setAttribute(attribute, elementProps[attribute])
    }
}


import { styleHandler } from "./";

export const attributeHandler = (elementProps, element) => {
    for (const attribute in elementProps) {
        if (attribute == "style") {
            styleHandler(elementProps, element);
        } else {
            attribute === "children"
                ? null
                : element.setAttribute(
                    attribute,
                    elementProps[attribute]
                );
        }
    }
};

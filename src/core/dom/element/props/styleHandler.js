export const styleHandler = (elementProps, element) => {
    if (typeof elementProps.style === "string") {
        element.style.cssText = elementProps.style;
    } else {
        Object.assign(element.style, elementProps.style);
    }
};

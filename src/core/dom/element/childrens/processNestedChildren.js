export const processNestedChildren = (child, fragment) => {
    child.forEach((child) => {
        if (child === null || child === undefined) return;

        let childToAppend = null;

        if (child instanceof Node) {
            childToAppend = child;
        } else if (typeof child === "function") {
            const childElement = child(elementProps);
            if (childElement instanceof Node) childToAppend = childElement;
        } else {
            childToAppend = document.createTextNode(String(child));
        }

        if (childToAppend) fragment.appendChild(childToAppend);
    });
};



export const processNestedChildren = (child, childNode) => {
    child.forEach((child) => {
        if (child instanceof Node) {
            fragment.appendChild(child);
        } else if (typeof child === "function") {
            const childElement = child(elementProps);
            if (childElement instanceof Node) {
                fragment.appendChild(childElement);
            }
        } else {
            childNode = document.createTextNode(child);
            fragment.appendChild(childNode);
        }
    });
};


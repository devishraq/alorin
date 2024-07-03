import { signalHandler } from "../../signal/index.js";
import { processNestedChildren } from "./processNestedChildren.js";

export const processChildrens = (childrens, fragment, childNode) => {
    childrens.forEach((node) => {
        if (Array.isArray(node)) {
            processNestedChildren(node, fragment);
        } else if (node == null) {
            return;
        } else if (node instanceof Node) {
            fragment.appendChild(node);
        } else if (typeof node === "function") {
            node.isSignal
                ? signalHandler(node, fragment)
                : fragment.appendChild(node(elementProps));
        } else {
            if (node !== undefined) {
                childNode = document.createTextNode(node);
                fragment.appendChild(childNode);
            } else {
                return;
            }
        }
    });
};
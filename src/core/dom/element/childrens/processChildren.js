import { signalHandler } from "../../signal/";
import { processNestedChildren } from "./processNestedChildren.js";

export const processChildrens = (childrens, fragment) => {
    childrens.forEach((node) => {

        let childNode = null;
        if (node === null || node === undefined) return;
        console.log('signal', node.isSignal);
        if (Array.isArray(node)) processNestedChildren(node, fragment);
        else if (node instanceof Node) childNode = node;
        else if (typeof node === "function") {
            if (node.isSignal) {
                console.log("processChildrens -> node", node());
                childNode = signalHandler(node, fragment);
            } else {
                console.log("processChildrens -> node", node());
                childNode = node(elementProps);
            }
        }

        else childNode = document.createTextNode(String(node));

        if (childNode) fragment.appendChild(childNode);
    });
};

import { signalHandler } from "../../signal/";
import { createEffect } from "../../../reactivity/";
import { processNestedChildren } from "./processNestedChildren.js";

export const processChildrens = (childrens, fragment) => {
    childrens.forEach((node) => {

        let childNode = null;

        // If node is null or undefined, ignoe it
        if (node === null || node === undefined) return;

        if (Array.isArray(node)) processNestedChildren(node, fragment);
        else if (node instanceof Node) childNode = node;
        else if (typeof node === "function") {
            if (node.isSignal) childNode = signalHandler(node, fragment);
            else childNode = node(elementProps);
        }
        else childNode = document.createTextNode(String(node));

        // If childNode is not null or undefined, append it to the fragment
        if (childNode) fragment.appendChild(childNode);
    });
};

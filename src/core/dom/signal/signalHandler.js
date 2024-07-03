import { createEffect } from '../../reactivity';

export const signalHandler = (node, fragment) => {
    const textNode = document.createTextNode("");
    createEffect(() => {
        const value = node();
        textNode.nodeValue = value;
    });
    fragment.appendChild(textNode);
};
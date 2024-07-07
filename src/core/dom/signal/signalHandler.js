import { createEffect } from '../../reactivity';

export const signalHandler = (node, fragment) => {
    const textNode = document.createTextNode("");
    createEffect(() => {
        const value = String(node());
        console.log('from dignal handler', value);
        textNode.nodeValue = value;
    });
    fragment.appendChild(textNode);
};
import { createEffect } from '../../reactivity';

export const signalHandler = (node, fragment) => {
    const textNode = document.createTextNode("");
    createEffect(() => {
        const value = node();
        textNode.textContent = String(value);
    });
    fragment.appendChild(textNode);
};

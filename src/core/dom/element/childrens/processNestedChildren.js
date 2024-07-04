// import signalHandler
import { signalHandler } from "../../signal/";

export const processNestedChildren = (child, fragment) => {


    child.forEach((child) => {
        if (child === null || child === undefined) return;

        let childToAppend = null;

        if (child instanceof Node) {
            console.log(child)
            childToAppend = child;
        }

        // All of the bellow commented code are looks like has no contribution in the final output, so I commented them out. my idea was createElement(tag, props, [...childrens]) .. but, I've made something like createElement(tag, props, ...childrens) .. so, I think I don't need to handle the childrens as an array. I can handle them as *arguments. they will be removed in future commits.

        // } else if (typeof child === "function") {
        //     console.log('Hello from condition block2');
        //     const childElement = child(elementProps);
        //     if (childElement instanceof Node) childToAppend = childElement;
        // } else {
        //     console.log('Hello from condition block3');
        //     childToAppend = document.createTextNode(String(child));
        // }         

        if (childToAppend) fragment.appendChild(childToAppend);
    });
};

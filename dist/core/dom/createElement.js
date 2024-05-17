export const createElement = (tag, props, ...childrens)=>{
    const element = document.createElement(tag);
    const fragment = document.createDocumentFragment();
    childrens.forEach((node)=>{
        if (typeof node == "string") {
            let textNode = document.createTextNode(node);
            fragment.appendChild(textNode);
        } else {
            fragment.appendChild(node);
        }
    });
    element.appendChild(fragment);
    return element;
}; // export default createElement;

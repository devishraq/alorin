const createElement = (tag, props, ...childrens)=>{
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
};
const wrapper = (...childrens)=>{
    const fragment = document.createDocumentFragment();
    childrens.forEach((node)=>{
        fragment.appendChild(node);
    });
    return fragment;
};
const part = 'World!';
const App = ()=>{
    return /*#__PURE__*/ createElement("h1", {
        className: "text-1",
        style: {
            opacity: 1
        }
    }, "Hello, ", /*#__PURE__*/ createElement("span", null, part));
};
export default App;

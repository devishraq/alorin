const createElement = (tag, props, ...childrens) => {
    const elem = document.createElement(tag);

    for (let node of childrens) {
        if(typeof node == "string"){
            let textNode = document.createTextNode(node);
            elem.appendChild(textNode)
        }
        else{
            elem.appendChild(node)
        }
    }
    return elem
 
};
 
const App = ()=>{
    return createElement("h1", {
        className: "text-1",
        style: {
            opacity: 1
        }
    }, 'Hello, world');
};
 

console.log(App())

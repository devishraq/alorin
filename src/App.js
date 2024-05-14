 
const createElement = (tag, props, ...childrens)=>{
    const element = document.createElement(tag);
    const fragment= document.createDocumentFragment();

   
    childrens.forEach((node)=>{
        if (typeof node == "string") {
        let textNode = document.createTextNode(node);
        fragment.appendChild(textNode);
        } else {
        fragment.appendChild(node);
        }
    })
  
    
    element.appendChild(fragment)
    return element;
};
const App = ()=>{
    return (        
               <h1 className='text-1' style={{opacity: 1}}>Hello, Developers</h1>
    )
}

// export default App;

console.log(App())
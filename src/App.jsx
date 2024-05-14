 

const createElement = (tag, props, childrens) =>{
    const elem = document.createElement(tag);
    // console.log(tag, props, childrens)
    return tag, props, childrens;
}
console.log(createElement())

const App = ()=>{
    return (        
               <h1 className='text-1' style={{opacity: 1}}>Hello, Devs</h1>
    )
}

export default App;
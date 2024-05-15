import * as temp from './core';
const part = 'World!';
const App = ()=>{
    return /*#__PURE__*/ temp.createElement("h1", {
        className: "text-1",
        style: {
            opacity: 1
        }
    }, "Hello, ", /*#__PURE__*/ temp.createElement("span", null, part));
};
export default App;

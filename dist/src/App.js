import * as alka from './core';
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

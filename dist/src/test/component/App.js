import{olka}from"../../core";export default(()=>{let cssStyles=`
  background: linear-gradient(to right, lightblue, darkblue);
  border-radius: 5px;
  padding: 10px 20px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 0.5s ease, color 0.5s ease;
`;return olka.createElement("div",null,olka.createElement("span",{style:cssStyles,onclick:"this.style.color = 'red'"},"Hello, World!"))});
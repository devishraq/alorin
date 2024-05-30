import{olka}from"../../core";import{createStyle}from"../../core/cssInJs/createStyle";let Styled=createStyle("h1")`
	color: #333;
	font-size: 24px;
	font-weight: bold;
	text-align: center;
	padding: 20px;
	background-color: #f4f4f4;
	border-bottom: 1px solid #ccc;
	&:hover {
		background-color: #e9e9e9;
	}

`;export default(({children,color})=>(console.log(children),olka.createElement(Styled,{style:{color:color}},children)));
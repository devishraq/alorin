import{olka}from"../../core";import{createStyle}from"../../core/cssInJs/createStyle";import Title from"./Title";let Button=createStyle("button")`
	background-color: #007bff;
	border: none;
	color: white;
	padding: 10px 20px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	cursor: pointer;
	border-radius: 5px;
	margin: 10px 0;
	&:hover {
		background-color: #0056b3;
	}
	&:active {
		background-color: #0056b3;
		transform: translateY(2px);
	}
	&:focus {
		outline: none;
	}
	&:disabled {
		background-color: #c0c0c0;
		cursor: not-allowed;
	}

	@media (max-width: 768px) {
		padding: 8px 16px;
		font-size: 14px;
	}
	@media (max-width: 576px) {
		padding: 6px 12px;
		font-size: 12px;
	}
	@media (max-width: 320px) {
		padding: 4px 8px;
		font-size: 10px;
	}

	@media (min-width: 1024px) {
		padding: 12px 24px;
		font-size: 18px;
	}

	@media (min-width: 1200px) {
		padding: 14px 28px;
		font-size: 20px;
	}
`;export default(()=>olka.createElement(olka.wrapper,null,olka.createElement(Button,null,"Click Here"),olka.createElement(Title,null),olka.createElement("div",{className:"body"},olka.createElement("h1",null,"Heading 1"),olka.createElement("h2",null,"Heading 2"),olka.createElement("h3",null,"Heading 3"),olka.createElement("h4",null,"Heading 4"),olka.createElement("h5",null,"Heading 5"),olka.createElement("h6",null,"Heading 6"),olka.createElement("p",null,"Paragraph"),olka.createElement("ol",null,olka.createElement("li",null,"Ordered List Item 1"),olka.createElement("li",null,"Ordered List Item 2"),olka.createElement("li",null,"Ordered List Item 3")))));
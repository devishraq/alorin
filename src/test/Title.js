import { olka } from "../core";
import { SubTitle } from "./SubTitle";
import { createStyle } from "../core/cssInJs/createStyle";

const Styled = createStyle("h1")`
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

`;

const Title = ({ children, color }) => {
	console.log(children);
	return <Styled>{children}</Styled>;
};

export default Title;

import { olka } from "../core";
import { createStyle } from "../core/cssInJs/createStyle";

const Styled = createStyle("button")`
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
	 
`;
const Button = ({ children }) => {
	return <Styled>{children}</Styled>;
};

export default Button;

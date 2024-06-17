import { olka } from "../core";
import { createStyle } from "../core/cssInJs/createStyle";

const Styled = createStyle("button")`
    background-color: orange;
    color: white;
    font-size: 14px;
    padding : 15px 15px 15px 15px;
    border-radius: 15px;
    outline: none;
    border: none;
`;

const Button = ({ children }) => {
	return <Styled>{children}</Styled>;
};

export default Button;

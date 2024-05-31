import { olka } from "../core";
import { createStyle } from "../core/cssInJs/createStyle";

const StyledTitle = createStyle("h1")`
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

const Title = ({ children }) => {
	return <StyledTitle>{children}</StyledTitle>;
};

const StyledSubTitle = createStyle("h2")`
    color: #666;
    font-size: 20px;
    text-align: center;
    padding: 10px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ccc;
    &:hover {
        background-color: #e9e9e9;
    }
`;

const SubTitle = ({ children }) => {
	return <StyledSubTitle>{children}</StyledSubTitle>;
};

const StyledParagraph = createStyle("p")`
    color: #999;
    font-size: 16px;
    text-align: justify;
    padding: 10px;
    background-color: #f4f4f4;
    border-bottom: 1px solid #ccc;
    &:hover {
        background-color: #e9e9e9;
    }
`;

const Paragraph = ({ children }) => {
	return <StyledParagraph>{children}</StyledParagraph>;
};

const StyledButton = createStyle("button")`
    color: #fff;
    font-size: 16px;
    padding: 10px 20px;
    background-color: #333;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #666;
    }
`;

const Button = ({ children, onClick }) => {
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export { Title, SubTitle, Paragraph, Button };

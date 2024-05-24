import { olka } from "../../core";
import { createStyle } from "../../core/cssInJs/createStyle";
import Title from "./Title";

const Button = createStyle("button")`
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
`;

const App = () => {
	return (
		<>
			<Button>Click Here</Button>
			<Title />
			<div className="body">
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
				<p>Paragraph</p>
				<ol>
					<li>Ordered List Item 1</li>
					<li>Ordered List Item 2</li>
					<li>Ordered List Item 3</li>
				</ol>
			</div>
		</>
	);
};

export default App;

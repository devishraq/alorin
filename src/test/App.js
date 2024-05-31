import { olka } from "../core";
import { Title, SubTitle, Button, Paragraph } from "./Title";

const App = () => {
	const handleOnClick = () => {
		console.log("One Click");
	};

	const handleDoubleClick = () => {
		console.log("Double Click");
	};

	return (
		<>
			<Title>Olka</Title>
			<SubTitle>React CSS-in-JS</SubTitle>
			<Paragraph>
				React CSS-in-JS is a way to style React
				components. It allows you to write CSS directly
				in your JavaScript files. This is a simple
				example of how to use React CSS-in-JS.
			</Paragraph>
			<button
				ondblclick={handleDoubleClick}
				onclick={handleOnClick}
			>
				Click me!
			</button>
		</>
	);
};

export default App;

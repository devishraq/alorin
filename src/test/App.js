import { olka } from "../core";
import { createStyle } from "../core/cssInJs/createStyle";
import Title from "./Title";
import Button from "./Button";
import { For } from "../core/widget/For";

const arr = ["Item 1", "Item 2", "Item 3"];

const App = () => {
	return (
		<olka.wrapper>
			<Button>CLICK ME!</Button>
			<div className="body">
				<Title>HERE YOU GO!</Title>
			</div>
		</olka.wrapper>
	);
};

export default App;

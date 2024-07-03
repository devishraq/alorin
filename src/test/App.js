import { olka, createSignal, createEffect } from "../core";

//  create a a simple text update on input change component
const App = () => {
	const [text, setText] = createSignal("");

	createEffect(() => {
		console.log("Text:", text());
	});
	const changeText = (e) => setText(e.target.value)

	return (
		<div>
			<h1>{text}</h1>
			<input type="text" onInput={changeText} />
		</div>
	);
};


export default App;
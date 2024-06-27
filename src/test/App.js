import { olka, createSignal, createEffect } from "../core";

const Counter = ({ initialCount = 0 }) => {
	const [count, setCount] = createSignal(initialCount);
	const increment = () => setCount(c => c + 1);
	const decrement = () => setCount(c => c - 1);

	return (
		<>
			<h1>Count: {count}</h1>
			<button onclick={increment}>Plus</button>
			<button onclick={decrement}>Minus</button>
		</>
	);
};

const UpdateText = () => {
	const [text, setText] = createSignal('Hello');

	const changeText = (event) => {
		setText(event.target.value);
	}


	return (
		<>
			<input oninput={changeText} />
			<h2 style={{ right: 0, top: 0 }}>{text}</h2>
		</>
	);
}

const AutoTimer = () => {
	const [counter, setCounter] = createSignal(0);
	setInterval(() => {
		setCounter(c => c + 1)
	})
	return (
		<h3>{counter}</h3>
	)
}

const App = () => {
	return (
		<>
			<AutoTimer />
			<p>---------------------</p>
			<UpdateText />
			<p>---------------------</p>
			<Counter initialCount={5} />

		</>
	);
};

export default App;
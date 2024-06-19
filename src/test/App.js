import { olka } from "../core";
import { createSignal, createEffect } from "../core/reactivity"; // Adjust the import path as needed

const App = () => {
	const [count, setCount] = createSignal(0);

	const increment = () => {
		setCount(count() + 1); // Update count using the setter function
	};

	const decrement = () => {
		setCount(count() - 1); // Update count using the setter function
	};

	createEffect(() => {
		console.log("count", count());
	});

	return (
		<>
			<p>{count()}</p>
			<button onclick={increment}>Plus</button>
			<button onclick={decrement}>Minus</button>
		</>
	);
};

export default App;

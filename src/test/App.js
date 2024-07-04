import { olka, createSignal, createEffect } from "../core";

import Button from "./Button";


const App = () => {
	const [todos, setTodos] = createSignal(
		[
			"todo 1",
			"todo 2",
			"todo 3",
			"todo 4",
			"todo 5",
		]
	);
	const [counter, setCounter] = createSignal(0)
	const [newTodo, setNewTodo] = createSignal("");

	const addTodo = () => {
		setTodos(prevState => [...prevState(), newTodo()]);
		setNewTodo("");
	};

	const inputHandler = (e) => {
		setNewTodo(e.target.value);
		setCounter(e.target.value)

	};

	createEffect(() => {
		console.log("Todos:", todos());
	});

	return (
		<div>
			<input
				type="text"
				value={newTodo()}
				onInput={inputHandler}
			/>
			<button onClick={addTodo}>Add Todo</button>
			<ul>
				{todos().map((todo, index) => (
					<>
						<div>{counter}
							<li key={index}>{todo}</li>
						</div>
						<Button>Click Me!</Button>
					</>
				))}
			</ul>

			<ol>
				<li>
					<a target="_blank" href="google.com">
						<span>Hey Howdy1</span>
					</a>
				</li>
				<li>
					<a target="_blank" href="google.com">
						<span>Hey Howdy2</span>
					</a>
				</li>
				<li>
					<a target="_blank" href="google.com">
						<span>Hey Howdy3</span>
					</a>
				</li>
			</ol>
		</div>
	);
};

export default App;

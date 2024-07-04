import { olka, createSignal, createEffect } from "../core";

const App = () => {
	const [todos, setTodos] = createSignal(['todo 1', 'todo 2', 'todo 3', 'todo 4', 'todo 5']);
	const [newTodo, setNewTodo] = createSignal("");

	const addTodo = () => {
		setTodos([...todos(), newTodo()]);
		setNewTodo("");
	};

	const inputHandler = (e) => {
		setNewTodo(e.target.value);
	}
	createEffect(() => {
		console.log("Todos:", todos());
	});


	const Todo = () => {
		return (<ul>
			{todos().map((todo, index) => (
				<>
					<li key={index}>{todo}</li>
				</>
			))}
		</ul>
		)
	}

	return (
		<div>
			<button style={{
				'position': 'absoulute',
				'right': '0',
				'top': '0',
				'zIndex': '100'
			}} onClick={Todo}>re-render the ul</button>
			<input
				type="text"
				value={newTodo()}
				onInput={inputHandler}
			/>
			<button onClick={addTodo}>Add Todo</button>
			<Todo />
		</div>
	);
}



export default App;
import { olka } from "../../core";

let count = 0;


const handleClick =()=>{
	console.log("successfully loged via click!")
}
const App = () => {
	return (
		<div>
			{/* <span>
				{count}
			</span>
			<button onClick={()=>{count++}}>Increment</button>
			<button onClick={()=>{count--}}>Decrement</button> */}

			<h1
				onclick={handleClick}
				className="txt-1"
				style={{ color: "grey", fontSize: "30px" }}
			>
				Hello, World
			</h1>
		</div>
	);
};

export default App;

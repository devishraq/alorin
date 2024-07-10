let currentComputation = null;

const createComputation = (computation) => {
	const execeuteComputation = () => {
		currentComputation = computation;
		computation();
		currentComputation = null;
	}
	execeuteComputation();
};

export { createComputation, currentComputation };

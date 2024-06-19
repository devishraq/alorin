let currentComputation = null;

const createComputation = (computation) => {
	const executeComputation = () => {
		currentComputation = executeComputation;
		computation();
		currentComputation = null;
	};
	executeComputation();
};

export { createComputation, currentComputation };

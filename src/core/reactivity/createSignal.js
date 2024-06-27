import { currentComputation } from "./createComputation.js";

const createSignal = (initialValue) => {
	let value = initialValue;
	const subscribers = new Set();

	const getValue = () => {
		if (currentComputation) {
			subscribers.add(currentComputation);
		}

		return value;
	};

	const setValue = (newValue) => {
		if (typeof newValue === "function") {
			value = newValue(value);
			// console.log(value);
		} else {
			value = newValue;
		}
		notifySubscribers()
	};

	const notifySubscribers = () => {
		subscribers.forEach((subscriber) => subscriber());
	}
	// isSignal is a custom Value which indicates whether it is signal node or a function
	getValue.isSignal = true;

	return [getValue, setValue];
};

export default createSignal;

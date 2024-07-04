import { currentComputation } from "./createComputation.js";

const createSignal = (initialValue) => {
	let value = initialValue;
	const subscribers = new Set();

	const notifySubscribers = () => {
		subscribers.forEach((subscriber) => subscriber());
		console.table(subscribers);
	};

	const getValue = () => {
		if (currentComputation) {
			subscribers.add(currentComputation);
		}
		return value;
	};

	const setValue = (newValue) => {
		if (value == newValue) {
			return;
		} else {
			typeof newValue === "function"
				? (value = newValue(value))
				: (value = newValue);
		}

		notifySubscribers();
	};

	getValue.isSignal = true;

	return [getValue, setValue];
};

export default createSignal;

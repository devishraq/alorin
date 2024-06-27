import { currentComputation } from "./createComputation.js";

const createSignal = (initialValue) => {
	let value = initialValue;
	const subscribers = new Set();

	const notifySubscribers = () => {
		subscribers.forEach((subscriber) => subscriber());
	};

	const getValue = () => {
		if (currentComputation) {
			subscribers.add(currentComputation);
		}
		return value;
	};

	const setValue = (newValue) => {
		value = newValue;
		notifySubscribers();
	};

	return [getValue, setValue];
};

export default createSignal;

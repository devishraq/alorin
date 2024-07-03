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
		if (value === newValue) {
			return;
		}
		else if (typeof newValue === "function") {
			value = newValue(value);
		}
		else {
			value = newValue;
		}

		notifySubscribers();
	};


	getValue.isSignal = true;


	return [getValue, setValue];


};

export default createSignal;

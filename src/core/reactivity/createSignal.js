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
		switch (newValue) {
			case value == newValue:
				return;
			case typeof newValue === "function":
				value = newValue(value);
				break;
			default:
				value = newValue;
		}

		notifySubscribers();
	};

	getValue.isSignal = true;

	return [getValue, setValue];
};

export default createSignal;

// Global context for tracking dependencies
let currentEffect = null;

// Create a signal
function createSignal(initialValue) {
	let value = initialValue;
	const _deps = new Set();
	const notify = () => {
		for (let dep of _deps) {
			dep();
		}
		console.log("Notified");
		console.log(_deps);
	};

	function get() {
		if (currentEffect) {
			_deps.add(currentEffect);
		}
		return value;
	}

	function set(newValue) {
		if (value !== newValue) {
			value = newValue;
			notify();
			// console.log('Signal: ', value);
		}
	}
	get.isSignal = true;
	return [get, set];
}

// Create an effect
function createEffect(fn) {
	const effect = () => {
		currentEffect = effect;
		fn();
		currentEffect = null;
	};
	effect();
	// return "fd";
}

// Create a computed value
function createComputed(fn) {
	// const [get, set] = createSignal(undefined);
	// createEffect(() => set(fn()));
	// return get;
	return "fd";
}

export { createSignal, createEffect, createComputed };

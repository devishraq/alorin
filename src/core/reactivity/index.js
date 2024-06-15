// Define a map to store dependencies between reactive variables and update functions
const dependenciesMap = new Map();

// Function to create a reactive variable
function createReactiveVariable(initialValue) {
	let value = initialValue;
	const subscribers = new Set();

	function getValue() {
		return value;
	}

	function setValue(newValue) {
		if (newValue !== value) {
			value = newValue;
			notifySubscribers();
		}
	}

	function subscribe(subscriber) {
		subscribers.add(subscriber);
		trackDependency(subscriber);
		return () => subscribers.delete(subscriber);
	}

	function notifySubscribers() {
		subscribers.forEach((subscriber) => subscriber());
	}

	function trackDependency(updateFunction) {
		dependenciesMap.set(updateFunction, notifySubscribers);
	}

	return [getValue, setValue, subscribe];
}

// Function to create a reactive component
function createReactiveComponent(renderFunction) {
	const update = () => {
		const renderOutput = renderFunction();
		console.log("Updating DOM:", renderOutput);
	};

	// Automatically track dependency of the component on reactive variables
	update();
	trackDependencies(update);

	return update;
}

// Function to track dependencies of a component
function trackDependencies(updateFunction) {
	dependenciesMap.set(updateFunction, () => {
		updateFunction();
	});
}

// Function to trigger updates based on changes to reactive variables
function triggerUpdates() {
	dependenciesMap.forEach((notify) => notify());
}

// Example usage:

// Step One: Create Reactive Variables
const [count, setCount, countSubscribe] = createReactiveVariable(0);

// Step Two: Define Reactive Components
const countComponent = createReactiveComponent(() => {
	console.log("Rendering component with count:", count());
});

// Step Three: Trigger Updates Automatically
setCount(1); // This triggers an update in the component

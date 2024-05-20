export const createEvents = (props, element) => {
	const isEventProp = (key) => key.startsWith("on");

	const events = Object.entries(props).filter(([key]) => isEventProp(key));
	console.log(events);
	events.forEach(([key, callbackHandler]) => {
		element.addEventListener(key.slice(2).toLowerCase(), callbackHandler);
	});
};

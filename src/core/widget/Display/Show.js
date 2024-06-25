import { olka } from "../..";

const Show = ({ condition, children }) => {
	// If the condition is false, return null. Like something to remvoe the component from the DOM.
	if (condition == true) {
		return <>{children}</>;
	}
	// If the condition is true, return the children.
	return <></>;
};

export default Show;

export const render = (element, container=document.body) => {
	// Cleaning the container
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}

	// Append the new element to the container
	container.appendChild(element);
};

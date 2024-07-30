let d = document;
export const newDFrag = () => d.createDocumentFragment();
export const newTextNode = (s) => d.createTextNode(s);
export const newElement = (t) => d.createElement(t);

export const childAppender = (p, c) => p.appendChild(c);

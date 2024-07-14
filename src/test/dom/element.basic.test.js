// @ts-nocheck

import { alorin } from "../../core";
import { jest } from "@jest/globals";
// swc transpiler automatically converts the JSX syntax to the createElement function like this `alorin.createElement("div", null, "Hello")`

describe("Element Pragma", () => {
	test("createElement returns a valid element", () => {
		const element = <div>Hello</div>;
		expect(element).toBeInstanceOf(HTMLElement);
		expect(element.tagName).toBe("DIV");
		expect(element.textContent).toBe("Hello");
	});

	test("Nested elements are created correctly", () => {
		const element = (
			<div>
				<h1>Title</h1>
				<p>Paragraph</p>
			</div>
		);
		expect(element.children).toHaveLength(2);
		expect(element.children[0].tagName).toBe("H1");
		expect(element.children[1].tagName).toBe("P");
	});

	test("Props are set correctly", () => {
		const element = (
			<div id="test" class="sample">
				Test
			</div>
		);
		expect(element).toHaveAttribute("id", "test");
		expect(element).toHaveClass("sample");
	});

	test("Event listeners are attached properly", () => {
		const mockFn = jest.fn();
		const element = <button onClick={mockFn}>Click me</button>;
		element.click();
		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	test("Conditional rendering works", () => {
		const condition = true;
		const element = (
			<div>
				{condition && <span>Rendered</span>}
				{!condition && <span>Not Rendered</span>}
			</div>
		);
		expect(element.children).toHaveLength(1);
		expect(element.children[0].textContent).toBe("Rendered");
	});

	test("List rendering works", () => {
		const items = ["Item 1", "Item 2", "Item 3"];
		const element = (
			<ul>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		);
		expect(element.children).toHaveLength(3);
		expect(element.children[0].textContent).toBe("Item 1");
		expect(element.children[1].textContent).toBe("Item 2");
		expect(element.children[2].textContent).toBe("Item 3");
	});
});

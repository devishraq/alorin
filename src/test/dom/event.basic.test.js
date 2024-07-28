// @ts-nocheck

import { alorin, render } from "../../core";
import { jest } from "@jest/globals";

describe("Event Handling Tests", () => {
	test("Event propagation works correctly", () => {
		const mockFnParent = jest.fn();
		const mockFnChild = jest.fn();

		const element = (
			<div onClick={mockFnParent}>
				<button onClick={mockFnChild}>Click me</button>
			</div>
		);

		const button = element?.querySelector("button");
		if (button) {
			button.click();
		}

		expect(mockFnChild).toHaveBeenCalledTimes(1);
		expect(mockFnParent).toHaveBeenCalledTimes(1);
	});

	test("Custom events are handled correctly", () => {
		const mockFn = jest.fn();

		const element = <div onCustomEvent={mockFn}>Custom Event</div>;

        const event = new Event("customEvent", { bubbles: true });
        
		element.dispatchEvent(event);

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	test("Event with parameters is handled correctly", () => {
		const mockFn = jest.fn((event, param1, param2) => {
			return [param1, param2];
		});

		const element = (
			<button
				onClick={(event) => mockFn(event, "param1", "param2")}
			>
				Click me
			</button>
		);

		element.click();

		expect(mockFn).toHaveBeenCalledWith(
			expect.any(Object),
			"param1",
			"param2"
		);
	});

	test("Event delegation works correctly", () => {
		const mockFnParent = jest.fn();
		const mockFnChild = jest.fn();

		const element = (
			<div onClick={mockFnParent}>
				<button onClick={mockFnChild}>Click me</button>
			</div>
		);

		const button = element.querySelector("button");
		button.click();

		expect(mockFnChild).toHaveBeenCalledTimes(1);
		expect(mockFnParent).toHaveBeenCalledTimes(1);
	});

	test("Performance test for high-frequency events", () => {
		const mockFn = jest.fn();

        const element = (
			<>
				<button onClick={mockFn}>Click me</button>
			</>
		);
     

		const button = element.querySelector("button");

		for (let i = 0; i < 1000; i++) {
			button.click();
		}

		expect(mockFn).toHaveBeenCalledTimes(1000);
	});

	test("Conditional event binding works correctly", () => {
		const mockFn = jest.fn();
		const condition = true;

		const element = (
			<div>
				<button onClick={mockFn}>Click me</button>
			</div>
		);

		const button = element.querySelector("button");
		button.click();

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	test("stopPropagation prevents parent handler from executing", () => {
		const mockFnParent = jest.fn();
		const mockFnChild = jest.fn((event) => event.stopPropagation());

		const element = (
			<div onClick={mockFnParent}>
				<button onClick={mockFnChild}>Click me</button>
			</div>
		);

		const button = element.querySelector("button");
		button.click();

		expect(mockFnChild).toHaveBeenCalledTimes(1);
		expect(mockFnParent).toHaveBeenCalledTimes(0);
	});

	test("Event handler removed during execution", () => {
		const mockFn = jest.fn();

		const element = (
			<>
				<button onClick={mockFn}>Click me</button>
			</>
		);

		const button = element.querySelector("button");
		button.addEventListener("click", () => {
			button.removeEventListener("click", mockFn);
		});

		button.click();
		button.click();

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	test("Multiple event types on the same element", () => {
		const mockFnClick = jest.fn();
		const mockFnMouseOver = jest.fn();

		const element = (
			<>
				<button
					onClick={mockFnClick}
					onMouseOver={mockFnMouseOver}
				>
					Hover and Click me
				</button>
			</>
		);

		const button = element.querySelector("button");
		button.click();
		const event = new Event("mouseover");
		button.dispatchEvent(event);

		expect(mockFnClick).toHaveBeenCalledTimes(1);
		expect(mockFnMouseOver).toHaveBeenCalledTimes(1);
	});

	test("Asynchronous event handling", async () => {
		const mockFn = jest.fn().mockImplementation(async () => {
			return new Promise((resolve) => setTimeout(resolve, 100));
		});

		const element = (
			<>
				<button onClick={mockFn}>Click me</button>
			</>
		);

		const button = element.querySelector("button");
		await button.click();

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	test("Complex event delegation", () => {
		const mockFn = jest.fn();

		const element = (
			<div onClick={mockFn}>
				<div>
					<button>Click me</button>
				</div>
			</div>
		);

		const button = element.querySelector("button");
		button.click();

		expect(mockFn).toHaveBeenCalledTimes(1);
	});

	test("Memory leak detection", () => {
		const mockFn = jest.fn();
		const element = <button onClick={mockFn}>Click me</button>;

		render(element);

		let button = document.querySelector("button");

        button.click();
        button.remove()
		document.body.dispatchEvent(
			new MouseEvent("click", { bubbles: true })
		);

		expect(mockFn).toHaveBeenCalledTimes(1);
	});
});

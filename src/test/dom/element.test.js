// @ts-nocheck

import { alorin } from "../../core";
import { jest } from "@jest/globals";

describe("Basic JSX RENDERING TESTS", () => {
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

describe("ADVANCED JSX RENDERING TESTS", () => {
	test("Complex nested structure with mixed element types and conditional rendering", () => {
		const items = ["Apple", "Banana", "Cherry"];
		const showExtraInfo = true;
		const complexElement = (
			<div className="container">
				<header>
					<h1>Product List</h1>
					<nav>
						<ul>
							{["Home", "Products", "About"].map(
								(item) => (
									<li key={item}>
										<a
											href={`#${item.toLowerCase()}`}
										>
											{item}
										</a>
									</li>
								)
							)}
						</ul>
					</nav>
				</header>
				<main>
					<section>
						<h2>Available Products</h2>
						<ul>
							{items.map((item, index) => (
								<li key={index}>
									{item}
									{showExtraInfo && (
										<span className="extra-info">
											{" "}
											- In Stock
										</span>
									)}
								</li>
							))}
						</ul>
					</section>
					{items.length > 0 ? (
						<p>Total items: {items.length}</p>
					) : (
						<p>No items available</p>
					)}
				</main>
				<footer>
					<p>&copy; 2024 Product Store</p>
				</footer>
			</div>
		);

		expect(complexElement.tagName).toBe("DIV");
		expect(complexElement.className).toBe("container");
		expect(complexElement.children.length).toBe(3);
		expect(complexElement.querySelector("h1").textContent).toBe(
			"Product List"
		);
		expect(complexElement.querySelectorAll("nav li").length).toBe(3);
		expect(complexElement.querySelectorAll("section li").length).toBe(
			3
		);
		expect(complexElement.querySelectorAll(".extra-info").length).toBe(
			3
		);
		expect(complexElement.querySelector("main > p").textContent).toBe(
			"Total items: 3"
		);
		expect(complexElement.querySelector("footer p").textContent).toBe(
			"© 2024 Product Store"
		);
	});

	test("Dynamic attribute names and complex attribute merging", () => {
		const customAttr = "data-custom";
		const baseProps = {
			className: "base-class",
			style: { color: "red" },
			"data-base": "base-value",
		};
		const overrideProps = {
			className: "override-class",
			style: { fontSize: "16px" },
			[customAttr]: "custom-value",
		};

		const element = (
			<div
				{...baseProps}
				{...overrideProps}
				className={`${baseProps.className} ${overrideProps.className}`}
				style={{
					...baseProps.style,
					...overrideProps.style,
				}}
				aria-label="Test element"
			>
				Content
			</div>
		);

		expect(element.className).toBe("base-class override-class");
		expect(element.style.color).toBe("red");
		expect(element.style.fontSize).toBe("16px");
		expect(element.getAttribute("data-base")).toBe("base-value");
		expect(element.getAttribute("data-custom")).toBe("custom-value");
		expect(element.getAttribute("aria-label")).toBe("Test element");
	});

	test("Handling of boolean and null attributes", () => {
		const element = (
			<div>
				<input type="checkbox" checked />
				<input type="checkbox" checked="" />
				<button disabled>Disabled Button</button>
				<button disabled={false}>Enabled Button</button>
				<div hidden>Null Hidden</div>
				<div data-attr={undefined}>Undefined Attr</div>
			</div>
		);

		const [
			checkedInput,
			uncheckedInput,
			disabledButton,
			enabledButton,
			nullHidden,
			undefinedAttr,
		] = element.children;

		expect(checkedInput.checked).toBe(true);
		expect(uncheckedInput.checked).toBe(false);
		expect(disabledButton.disabled).toBe(true);
		expect(enabledButton.disabled).toBe(false);
	});

	test("Complex children types and nested fragments", () => {
		const ListItem = ({ children }) => <li>{children}</li>;

		const element = (
			<div>
				Text Node
				<span>Element Node</span>
				{null}
				{undefined}
				{false}
				{true}
				{42}
				{["Array", "of", "Nodes"].map((text) => (
					<span key={text}>{text}</span>
				))}
				<>
					<p>Fragment 1</p>
					<>
						<p>Nested Fragment</p>
						<ListItem>Custom Component</ListItem>
					</>
				</>
			</div>
		);

		expect(element.childNodes.length).toBe(9); // 1 text, 1 span, 1 number, 3 spans, 2 p, 1 li
		expect(element.textContent).toBe(
			"Text NodeElement Node42ArrayofNodesFragment 1Nested FragmentCustom Component"
		);
		expect(element.querySelectorAll("span").length).toBe(4);
		expect(element.querySelectorAll("p").length).toBe(2);
		expect(element.querySelector("li").textContent).toBe(
			"Custom Component"
		);
	});

	test("Dynamic tag names with prop spreading", () => {
		const CustomTag = "article";
		const props = {
			id: "dynamic-id",
			className: "dynamic-class",
			"data-custom": "value",
		};

		const element = (
			<CustomTag {...props}>
				<h2>Dynamic Heading</h2>
				<p>Dynamic Content</p>
			</CustomTag>
		);

		expect(element.tagName).toBe("ARTICLE");
		expect(element.id).toBe("dynamic-id");
		expect(element.className).toBe("dynamic-class");
		expect(element.getAttribute("data-custom")).toBe("value");
		expect(element.querySelector("h2").textContent).toBe(
			"Dynamic Heading"
		);
		expect(element.querySelector("p").textContent).toBe(
			"Dynamic Content"
		);
	});

	test("Complex event handling with event delegation", () => {
		const handleClick = jest.fn((e) => e.target.tagName);
		const handleSpecialClick = jest.fn();

		const element = (
			<ul onClick={handleClick}>
				<li>Item 1</li>
				<li>Item 2</li>
				<li onClick={handleSpecialClick}>Special Item</li>
			</ul>
		);

		element.querySelectorAll("li")[0].click();
		expect(handleClick).toHaveBeenCalledTimes(1);
		expect(handleClick).toHaveReturnedWith("LI");

		element.querySelectorAll("li")[2].click();
		expect(handleClick).toHaveBeenCalledTimes(2);
		expect(handleSpecialClick).toHaveBeenCalledTimes(1);
	});

	test("Handling of style objects with vendor prefixes", () => {
		const element = (
			<div
				style={{
					color: "red",
					fontSize: "16px",
					WebkitTransition: "all .3s ease",
					MozTransition: "all .3s ease",
					msTransition: "all .3s ease",
					transition: "all .3s ease",
				}}
			/>
		);

		expect(element.style.color).toBe("red");
		expect(element.style.fontSize).toBe("16px");
		expect(element.style.WebkitTransition).toBe("all .3s ease");
		expect(element.style.MozTransition).toBe("all .3s ease");
		expect(element.style.msTransition).toBe("all .3s ease");
		expect(element.style.transition).toBe("all .3s ease");
	});

	test("Deeply nested conditional rendering with complex logic", () => {
		const condition1 = true;
		const condition2 = false;
		const items = ["a", "b", "c"];

		const element = (
			<div>
				{condition1 && (
					<section>
						{condition2 ? (
							<p>Condition 2 is true</p>
						) : (
							<>
								<h2>Condition 2 is false</h2>
								<ul>
									{items.map((item) => (
										<li key={item}>
											{item.toUpperCase()}
										</li>
									))}
								</ul>
							</>
						)}
					</section>
				)}
				{!condition1 && <p>Condition 1 is false</p>}
			</div>
		);

		expect(element.querySelector("section")).not.toBeNull();
		expect(element.querySelector("p")).toBeNull();
		expect(element.querySelector("h2").textContent).toBe(
			"Condition 2 is false"
		);
		expect(element.querySelectorAll("li").length).toBe(3);
		expect(element.querySelectorAll("li")[0].textContent).toBe("A");
	});
});

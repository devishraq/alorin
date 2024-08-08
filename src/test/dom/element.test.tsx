// @ts-nocheck

import { alorin, render } from "../../core";
import { jest } from "@jest/globals";

// Basic JSX Rendering Tests
describe("Basic JSX Rendering Tests", () => {
  // Test the creation of a simple element
  test("createElement returns a valid element", () => {
    const element = <div>Hello</div>;
    expect(element).toBeInstanceOf(HTMLElement);
    expect(element.tagName).toBe("DIV");
    expect(element.textContent).toBe("Hello");
  });

  // Test the creation of nested elements
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

  // Test conditional rendering logic
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

  // Test the rendering of list elements
  test("List rendering works", () => {
    const items = ["Item 1", "Item 2", "Item 3"];
    const element = (
      <ul>
        {items.map(item => (
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

// Event Handling Tests
describe("Event Handling Tests", () => {
  // Test the attachment of event listeners
  test("Event listeners are attached properly", () => {
    const mockFn = jest.fn();
    const element = <button onClick={mockFn}>Click me</button>;
    element.click();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  // Test complex event handling with delegation
  test("Complex event handling with event delegation", () => {
    const handleClick = jest.fn(e => e.target.tagName);
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
});

// Style and Attribute Handling Tests
describe("Style and Attribute Handling Tests", () => {
  // Test setting of attributes
  test("Props are set correctly", () => {
    const element = (
      <div id="test" class="sample">
        Test
      </div>
    );
    expect(element).toHaveAttribute("id", "test");
    expect(element).toHaveClass("sample");
  });

  // Test dynamic attribute names and merging
  test("Dynamic attribute names and complex attribute merging", () => {
    const customAttr = "data-custom";
    const baseProps = {
      className: "base-class",
      style: { color: "red" },
      "data-base": "base-value"
    };

    const overrideProps = {
      className: "override-class",
      style: { fontSize: "16px" },
      [customAttr]: "custom-value"
    };

    const element = (
      <div
        {...baseProps}
        {...overrideProps}
        className={`${baseProps.className} ${overrideProps.className}`}
        style={{
          ...baseProps.style,
          ...overrideProps.style
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

  // Test handling of boolean and null attributes
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

    const [checkedInput, uncheckedInput, disabledButton, enabledButton, nullHidden, undefinedAttr] =
      element.children;

    expect(checkedInput.checked).toBe(true);
    expect(uncheckedInput.checked).toBe(false);
    expect(disabledButton.disabled).toBe(true);
    expect(enabledButton.disabled).toBe(false);
  });

  // Test rendering of void elements (self-closing)
  test("Rendering of void elements", () => {
    const element = (
      <div>
        <br />
        <img src="test.jpg" alt="Test" />
        <input type="text" />
      </div>
    );

    expect(element.querySelector("br")).not.toBeNull();
    expect(element.querySelector("img").getAttribute("src")).toBe("test.jpg");
    expect(element.querySelector("input").getAttribute("type")).toBe("text");
  });

  // Test handling of non-string attribute values
  test("Handling of non-string attribute values", () => {
    const objValue = { key: "value" };
    const element = <div data-obj={objValue} data-num={42} data-bool={true} />;

    expect(element.getAttribute("data-obj")).toBe("[object Object]");
    expect(element.getAttribute("data-num")).toBe("42");
    expect(element.getAttribute("data-bool")).toBe("true");
  });

  // Test handling of style objects with vendor prefixes
  test("Handling of style objects with vendor prefixes", () => {
    const element = (
      <div
        style={{
          color: "red",
          fontSize: "16px",
          WebkitTransition: "all .3s ease",
          MozTransition: "all .3s ease",
          msTransition: "all .3s ease",
          transition: "all .3s ease"
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
});

// Advanced JSX Rendering Tests
describe("Advanced JSX Rendering Tests", () => {
  // Test complex nested structures with conditional rendering
  test("Complex nested structure with mixed element types and conditional rendering", () => {
    const items = ["Apple", "Banana", "Cherry"];
    const showExtraInfo = true;
    const complexElement = (
      <div className="container">
        <header>
          <h1>Product List</h1>
          <nav>
            <ul>
              {["Home", "Products", "About"].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              ))}
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
                  {showExtraInfo && <span className="extra-info"> - In Stock</span>}
                </li>
              ))}
            </ul>
          </section>
          {items.length > 0 ? <p>Total items: {items.length}</p> : <p>No items available</p>}
        </main>
        <footer>
          <p>&copy; 2024 Product Store</p>
        </footer>
      </div>
    );

    expect(complexElement.tagName).toBe("DIV");
    expect(complexElement.className).toBe("container");
    expect(complexElement.children.length).toBe(3);
    expect(complexElement.querySelector("h1").textContent).toBe("Product List");
    expect(complexElement.querySelectorAll("nav ul li")).toHaveLength(3);
    expect(complexElement.querySelectorAll("main section ul li")).toHaveLength(3);
    expect(complexElement.querySelector("footer p").textContent).toBe("© 2024 Product Store");
  });

  // Test rendering with complex props and dynamic content
  test("Complex props and dynamic content rendering", () => {
    const title = "Dynamic Title";
    const dynamicContent = "This content is dynamic.";
    const complexProps = {
      id: "complex-props",
      className: "complex-class",
      "data-role": "complex"
    };

    const element = (
      <div {...complexProps}>
        <h1>{title}</h1>
        <p>{dynamicContent}</p>
      </div>
    );

    expect(element.id).toBe("complex-props");
    expect(element.className).toBe("complex-class");
    expect(element.getAttribute("data-role")).toBe("complex");
    expect(element.querySelector("h1").textContent).toBe(title);
    expect(element.querySelector("p").textContent).toBe(dynamicContent);
  });
});

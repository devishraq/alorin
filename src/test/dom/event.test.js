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

    const button = element.querySelector("button");
    button.click();

    expect(mockFnChild).toHaveBeenCalledTimes(1);
    expect(mockFnParent).toHaveBeenCalledTimes(1);
  });

  test("Custom events are handled correctly", () => {
    const mockFn = jest.fn();

    const element = <div onCustomEvent={mockFn}>Custom Event</div>;

    const event = new CustomEvent("customEvent", { bubbles: true });
    element.dispatchEvent(event);

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Event with parameters is handled correctly", () => {
    const mockFn = jest.fn((event, param1, param2) => {
      return [param1, param2];
    });
    const fm = event => mockFn(event, "param1", "param2")

    const element = <button onClick={fm}>Click me</button>;

    const button = element.querySelector("button");
    button.click();

    expect(mockFn).toHaveBeenCalledWith(expect.any(Object), "param1", "param2");
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

    const element = <button onClick={mockFn}>Click me</button>;

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
    const mockFnChild = jest.fn(event => event.stopPropagation());

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

    const element = <button onClick={mockFn}>Click me</button>;

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
      <button onClick={mockFnClick} onMouseOver={mockFnMouseOver}>
        Hover and Click me
      </button>
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
      return new Promise(resolve => setTimeout(resolve, 100));
    });

    const element = <button onClick={mockFn}>Click me</button>;

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
    button.remove();
    document.body.dispatchEvent(new MouseEvent("click", { bubbles: true }));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Event handler with async callback", async () => {
    const mockFn = jest.fn().mockImplementation(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    const element = <button onClick={mockFn}>Click me</button>;

    const button = element.querySelector("button");
    await button.click();

    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test("Event listener attached multiple times", () => {
    const mockFn = jest.fn();

    const element = <button onClick={mockFn}>Click me</button>;

    const button = element.querySelector("button");
    button.addEventListener("click", mockFn);
    button.addEventListener("click", mockFn);

    button.click();

    expect(mockFn).toHaveBeenCalledTimes(2);
  });

  test("Event listener attached and removed dynamically", () => {
    const mockFn = jest.fn();
    const element = <button onClick={mockFn}>Click me</button>;

    const button = element.querySelector("button");
    button.addEventListener("click", mockFn);
    button.removeEventListener("click", mockFn);

    button.click();

    expect(mockFn).toHaveBeenCalledTimes(0);
  });

  test("Nested event handlers with async execution", async () => {
    const mockFnOuter = jest.fn();
    const mockFnInner = jest.fn().mockImplementation(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    });

    const element = (
      <div onClick={mockFnOuter}>
        <button onClick={mockFnInner}>Click me</button>
      </div>
    );

    const button = element.querySelector("button");
    await button.click();

    expect(mockFnInner).toHaveBeenCalledTimes(1);
    expect(mockFnOuter).toHaveBeenCalledTimes(1);
  });

  test("Multiple event handlers on nested elements", () => {
    const mockFnOuter = jest.fn();
    const mockFnInner = jest.fn();

    const element = (
      <div onClick={mockFnOuter}>
        <button onClick={mockFnInner}>Click me</button>
      </div>
    );

    const button = element.querySelector("button");
    button.click();

    expect(mockFnInner).toHaveBeenCalledTimes(1);
    expect(mockFnOuter).toHaveBeenCalledTimes(1);
  });

  test("Event listener for focus and blur events", () => {
    const mockFnFocus = jest.fn();
    const mockFnBlur = jest.fn();

    const element = <input onFocus={mockFnFocus} onBlur={mockFnBlur} />;

    const input = element.querySelector("input");
    input.focus();
    input.blur();

    expect(mockFnFocus).toHaveBeenCalledTimes(1);
    expect(mockFnBlur).toHaveBeenCalledTimes(1);
  });

  test("Mouse events (mousedown, mouseup)", () => {
    const mockFnMouseDown = jest.fn();
    const mockFnMouseUp = jest.fn();

    const element = (
      <button onMouseDown={mockFnMouseDown} onMouseUp={mockFnMouseUp}>
        Click me
      </button>
    );

    const button = element.querySelector("button");
    const mouseDownEvent = new Event("mousedown");
    const mouseUpEvent = new Event("mouseup");

    button.dispatchEvent(mouseDownEvent);
    button.dispatchEvent(mouseUpEvent);

    expect(mockFnMouseDown).toHaveBeenCalledTimes(1);
    expect(mockFnMouseUp).toHaveBeenCalledTimes(1);
  });
});

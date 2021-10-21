/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MyComponent } from "./MyComponent";

describe("MyComponent", () => {
  it("should only have one component in screen", () => {
    render(<MyComponent />);
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });

  it("should only have a new component in screen", () => {
    render(<MyComponent />);
    // This breaks, saying we have multiple matches. If you comment out
    // config/setup-tests.ts, however, it works.
    const inputField = screen.getByRole("textbox");
    expect(inputField).toBeInTheDocument();
  });
});

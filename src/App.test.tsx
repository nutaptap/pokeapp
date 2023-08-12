import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders search bar", () => {
    render(<App />);
    const searchBarElement = screen.getByPlaceholderText("Search...");
    expect(searchBarElement).toBeInTheDocument();
  });
});

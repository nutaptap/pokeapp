import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import { SearchBar } from "./SearchBar";

describe("SearchBar", () => {
  it("calls onSearchSubmit with the correct typed input", () => {
    const mockOnSearchSubmit = vi.fn();

    render(<SearchBar onSearchSubmit={mockOnSearchSubmit} />);

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "pikachu" },
    });
    fireEvent.submit(screen.getByRole("button"));

    expect(mockOnSearchSubmit).toHaveBeenCalledWith("pikachu");
  });
});

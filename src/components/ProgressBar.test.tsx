import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProgressBar } from "./ProgressBar";

describe("ProgressBar", () => {
  it("renders bar with correct width", () => {
    render(<ProgressBar currentValue={50} maxValue={100} color="water" />);
    expect(screen.getByLabelText("50%").querySelector("div")).toHaveStyle(
      "width: 50%"
    );
  });
  it("renders bar with correct color", () => {
    render(<ProgressBar currentValue={50} maxValue={100} color="water" />);
    expect(screen.getByLabelText("50%").querySelector("div")).toHaveClass(
      "water"
    );
  });
});

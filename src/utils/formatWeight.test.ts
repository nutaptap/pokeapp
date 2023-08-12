import { describe, it, expect } from "vitest";
import { formatWeight } from "./formatWeight";

describe("formatWeight", () => {
  it("returns kilograms and pounds in the correct format", () => {
    expect(formatWeight(52)).toBe("5.2kg 11.46lbs");
  });
});

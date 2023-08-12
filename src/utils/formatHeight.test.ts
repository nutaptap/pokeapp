import { describe, it, expect } from "vitest";
import { formatHeight } from "./formatHeight";

describe("formatHeight", () => {
  it("returns meters and feet in the correct format", () => {
    expect(formatHeight(4)).toBe(`0.4m ( 1"3' )`);
  });
});

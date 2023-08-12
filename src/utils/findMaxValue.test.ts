import { describe, it, expect } from "vitest";
import { findMaxValue } from "./findMaxValue";

const mockStats = [
  { base_stat: 128, effort: 0, stat: { name: "defense", url: "url" } },
  { base_stat: 39, effort: 0, stat: { name: "special-attack", url: "url" } },
  { base_stat: 88, effort: 0, stat: { name: "special-defense", url: "url" } },
];

describe("findMaxValue", () => {
  it("returns the max value", () => {
    expect(findMaxValue(mockStats)).toBe(128);
  });
});

import { describe, it, expect } from "vitest";
import { getPageFromUrl } from "./pagination";

describe("getPageFromUrl", () => {
  it("returns 1 when value is null", () => {
    expect(getPageFromUrl(null)).toBe(1);
  });

  it("returns 1 when value is invalid", () => {
    expect(getPageFromUrl("")).toBe(1);
    expect(getPageFromUrl("abc")).toBe(1);
    expect(getPageFromUrl("0")).toBe(1);
    expect(getPageFromUrl("-1")).toBe(1);
  });

  it("returns the page number when value is valid", () => {
    expect(getPageFromUrl("1")).toBe(1);
    expect(getPageFromUrl("2")).toBe(2);
    expect(getPageFromUrl("10")).toBe(10);
  });
});

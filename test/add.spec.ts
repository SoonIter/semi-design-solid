import { add } from "@semi-design-solid/shared";
import { describe, it, expect } from "vitest";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});

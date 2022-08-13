import { add } from "@semi-design-solid/shared";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(1, 2)).toEqual(3);
  });
});

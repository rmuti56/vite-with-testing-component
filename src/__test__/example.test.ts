import { example } from "../utils/example.util";

describe("example function", () => {
  it("should double the input number", () => {
    const input = 5;

    const result = example(input);

    expect(result).toBe(10);
  });
});

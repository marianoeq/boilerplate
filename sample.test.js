import { add } from "./sample";

describe("given an add function ", () => {
  describe("when function received a call", () => {
    test("then should return 1", () => {
      const r = add();
      const expected = 1;
      expect(r).toBe(expected);
    });
  });
});

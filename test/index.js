import matchIt from "../lib/index.js";
import tester from "tester";

tester.describe("match-it", (test) => {
  test.it("finds the matches", () => {
    test.expect(matchIt("Hello World!", /(World|Mars)/)[1]).toBe("World");
    test.expect(matchIt("Hello Mars!", /(World|Mars)/)[1]).toBe("Mars");
  });

  test.it("returns empty array when there are no matches", () => {
    test.expect(matchIt("Hello Pluto!", /(World|Mars)/)[0]).toBe(undefined);
    test.expect(matchIt("Hello Pluto!", /(World|Mars)/)).toEqual([]);
  });
});

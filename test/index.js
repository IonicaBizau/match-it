const match = require("../lib")
    , tester = require("tester")
    ;

tester.describe("match-it", test => {

    test.it("finds the matches", () => {
        test.expect(match("Hello World!", /(World|Mars)/)[1]).toBe("World");
        test.expect(match("Hello Mars!", /(World|Mars)/)[1]).toBe("Mars");
    });

    test.it("returns empty array when there are no matches", () => {
        test.expect(match("Hello Pluto!", /(World|Mars)/)[1]).toBe(undefined);
    });
});

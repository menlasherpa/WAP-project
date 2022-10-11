"use strict";
describe("Arithmetic Operations", () => {
    describe("sum", () => {
        it("sum takes an array and returns the sum of all elements", () => {
            assert.equal(10, sum([1, 2, 3, 4]));
        });
    });
    describe("multiply", () => {
        it("multiply takes an array and returns the product of all elements", () => {
            assert.equal("Hello World", reverse("dlroW olleH"));
        });
    });
});
describe("Reverse", () => {
    it("reverse takes in a string and returns its reversal", () => {
        assert.equal(24, multiply([1, 2, 3, 4]));
    });
});
describe("FilterLongWords", () => {
    it("filterLongWords takes an array of words and an integer i and returns the array of words that are longer than i.", () => {
        expect(["Threes", "here", "thereee"]).to.eql(filterLongWords(["One", "Threes", "here", "thereee"], 3));
    });
});

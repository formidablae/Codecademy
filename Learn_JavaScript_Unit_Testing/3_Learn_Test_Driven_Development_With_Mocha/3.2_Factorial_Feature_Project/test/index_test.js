var assert = require("assert");
var Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.factorial', () => {
        it('returns if 5! is equal to 120', () => {
            const input = 5;
            const result = Calculate.factorial(input);
            const expectedResult = 120;

            assert.equal(result, expectedResult);
        });

        it('returns if 3! is equal to 6', () => {
            const input = 3;
            const result = Calculate.factorial(input);
            const expectedResult = 6;

            assert.equal(result, expectedResult);
        });

        it('returns if 0! is equal to 1', () => {
            const input = 0;
            const result = Calculate.factorial(input);
            const expectedResult = 1;

            assert.equal(result, expectedResult);
        });
    });
});

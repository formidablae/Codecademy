const assert = require('assert');
const Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.sum', () => {
        it('returns the sum of an array of numbers', () => {
            const expectedResult = 6;
            const inputArr = [1, 2, 3];
            const result = Calculate.sum(inputArr);
            assert.equal(result, expectedResult);
        });
    });
});

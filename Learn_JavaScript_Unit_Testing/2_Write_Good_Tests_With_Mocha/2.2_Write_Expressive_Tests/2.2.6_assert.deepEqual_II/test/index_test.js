const assert = require('assert');

describe('+', () => {
    it('returns the sum of two values', () => {
        // Setup
        let expected = [3, 4, 7];
        let sum = [3, 4];

        // Exercise
        sum.push(3 + 4);

        // Verify
        assert.deepEqual(sum, expected);
    });
});

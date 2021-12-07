// Import assert here
const assert = require('assert');

describe('-', () => {
    it('returns the difference of two values', () => {
        const bigNum = 100;
        const smallNum = 4;
        const expected = 96;

        const result = bigNum - smallNum;

        // Write assertion here
        assert.strictEqual(result, expected);
    });
});

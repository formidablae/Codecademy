const assert = require('assert');

describe('Math', () => {
    describe('.max', () => {
        it('returns the argument with the highest value', () => {
            const minimum = 1;
            const median = 2;
            const maximum = 3;

            const result = Math.max(median, minimum, maximum);

            assert.ok(result === maximum);
        });
        it('returns -Infinity when no arguments are provided', () => {
            const negInfinity = -Infinity;

            const result = Math.max();

            assert.ok(result === negInfinity);
        });
    });
});

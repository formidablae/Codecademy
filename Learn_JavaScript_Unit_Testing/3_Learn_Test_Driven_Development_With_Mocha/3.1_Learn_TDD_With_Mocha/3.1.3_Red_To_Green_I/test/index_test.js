const assert = require('assert');
const Calculate = require('../index.js')

describe('Calculate', () => {
    describe('.sum', () => {
        it('returns the sum of of a list\'s items', () => {
            assert.equal(Calculate.sum([1, 2, 3]), 6);
        });
    });
});

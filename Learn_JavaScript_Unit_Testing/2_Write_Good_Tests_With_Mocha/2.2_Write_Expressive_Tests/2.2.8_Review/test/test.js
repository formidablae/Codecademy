console.log = function () { };

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 1', () => {
    it('asserts that `assert.notStrictEqual` is in it block', () => {

        let structure = function () {
            describe(_, () => {
                it(_, () => {
                    assert.notStrictEqual();
                });
            });
        };

        // assert that structure matches
        let isMatch = Structured.match(code, structure);
        let failureMessage = 'Call `assert.notStrictEqual` in the `it` block.';
        assert.isOk(isMatch, failureMessage);

        // assert that two digits are passed to assert.notEqual()
        let codeMatch = code.match(/assert\.\s*notStrictEqual\s*\(\s*(\d)\s*,\s*(\d)\s*\)/);
        assert.isOk(codeMatch, 'Pass two numbers to `assert.notStrictEqual`.');

        // assert that first and second capture groups are not equal
        assert.isOk((codeMatch[1] !== codeMatch[2]), 'Use two different numbers in your assertion.');
    });
});

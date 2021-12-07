console.log = function () { };

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 1', () => {
    it('asserts that `assert.equal(result, expected)` is in it block', () => {

        let structure = function () {
            describe(_, () => {
                it(_, () => {
                    assert.equal();
                });
            });
        };

        // assert that structure matches
        let isMatch = Structured.match(code, structure);
        let failureMessage = 'Call `assert.equal` in the `it` block.';
        assert.isOk(isMatch, failureMessage);

        // assert that result and expected are passed to assert.equal()
        let codeMatch = code.match(/assert\.\s*equal\s*\(\s*(result|expected)\s*,\s*(result|expected)\s*\)/);
        assert.isOk(codeMatch, 'Pass the arguments `result` and `expected` to `assert.equal()`.');

        // assert that first and second capture groups are result and expected or expected and result
        assert.isOk((codeMatch[1] == 'result' && codeMatch[2] == 'expected' || codeMatch[1] == 'expected' && codeMatch[2] == 'result'),
            'Compare `result` and `expected` in your assertion.');
    });
});

console.log = function () { };

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 4', () => {
    it('asserts that `fs.unlinkSync(path)` is in it block after `assert.ok()`', () => {

        let structure = function () {
            describe(_, () => {
                it(_, () => {
                    assert.deepEqual();
                    fs.unlinkSync($expr);
                });

                it(_, () => {
                    assert.deepEqual();
                    fs.unlinkSync($expr);
                });
            });
        };

        // assert that structure matches
        let isMatch = Structured.match(code, structure);
        let failureMessage = 'Call `fs.unlinkSync(path)` beneath the Teardown comment in both tests.';
        assert.isOk(isMatch, failureMessage);

        // assert that regex matches
        let codeMatch = code.match(/fs\.\s*unlinkSync\s*\(\s*path\s*\)/);
        assert.isOk(codeMatch, 'Pass `path` as an argument to `.unlinkSync()`.');
    });
});

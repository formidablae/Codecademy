console.log = function () { };

const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('./test/index_test.js', 'utf8');

describe('Checkpoint 3', () => {
    it('asserts `afterEach` hook is within `describe` block', () => {

        // arrow notation
        let structure1 = function () {
            describe(_, () => {
                afterEach(() => {
                });
                it();
            });
        };

        // function() notation
        let structure2 = function () {
            describe(_, () => {
                afterEach(function () {
                });
                it();
            });
        };

        // assert that structure1 or structure2 matches
        let isMatch1 = Structured.match(code, structure1);
        let isMatch2 = Structured.match(code, structure2);
        let failureMessage = '`afterEach` hook must be outside of `it()` but within `describe()`';
        assert.isOk(isMatch1 || isMatch2, failureMessage);
    });
});

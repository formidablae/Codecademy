console.log = function () { };
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/index_test.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureSelector = function () {
            describe('Calculate', () => {
                describe('.sum', () => {
                    it('returns the sum of an array of numbers', () => {

                    });
                });
            });
        };

        let isMatchSelector = Structured.match(code, structureSelector);
        let failureMessage = 'Did you add a closing paranthesis at the end of the code?';

        assert.isOk(isMatchSelector, failureMessage);
    });
});

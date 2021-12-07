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

                        assert.equal(Calculate.sum([1, 2, 3]), 6);
                    });
                });
            });
        };

        let isMatchSelector = Structured.match(code, structureSelector);
        let failureMessage = 'Did you write an `assert.equal()` statement with `Calculate.sum([1,2,3])` and `6` as arguments?'

        assert.isOk(isMatchSelector, failureMessage)
    })
})

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
                        const $expected = 6;
                        const $inputArray = [1, 2, 3]
                        const $result = Calculate.sum($inputArray);

                        assert.equal($result, $expected);
                    });
                });
            });
        };



        let isMatchSelector = Structured.match(code, structureSelector);
        //let isAlsoMatchSelector = Structured.match(code, structureSelectorTwo);
        let failureMessage = 'did you set three `const` variables and describe the intended behavior of them using `assert.equal`? ';

        assert.isOk(isMatchSelector, failureMessage)
    })
})

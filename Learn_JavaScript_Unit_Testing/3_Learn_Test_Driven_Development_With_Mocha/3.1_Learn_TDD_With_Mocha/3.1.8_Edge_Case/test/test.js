console.log = function () { };
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('test/index_test.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureSelectorOne = function () {

            describe('Calculate', () => {
                describe('.sum', () => {
                    it('returns the sum of an array of numbers', () => {
                        const $expectedResult = 6;
                        const $inputArray = [1, 2, 3]
                        const $result = Calculate.sum($inputArray)
                        assert.equal($result, $expectedResult);
                    });

                    it('returns the sum of a four item list', () => {
                        const $expectedResult = 22;
                        const $inputArray = [4, 6, 5, 7];
                        const $result = Calculate.sum($inputArray);
                        assert.equal($result, $expectedResult)
                    });

                    it('returns zero for an empty array', () => {
                        const $expectedResult = 0;
                        const $inputArray = [];
                        const $result = Calculate.sum($inputArray);
                        assert.equal($result, $expectedResult)
                    });




                });
            });
        }



        let isMatchSelectorOne = Structured.match(code, structureSelectorOne);
        let failureMessage = 'Did you add another `it` block? And assert that the expected result and result should be equal? ';

        assert.isOk(isMatchSelectorOne, failureMessage)
    })
})

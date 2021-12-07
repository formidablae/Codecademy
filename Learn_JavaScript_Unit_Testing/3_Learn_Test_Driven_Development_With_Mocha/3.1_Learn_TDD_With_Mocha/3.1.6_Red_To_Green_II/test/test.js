console.log = function () { };
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureSelectorOne = function () {
            const Calculate = {
                sum($inputArray) {
                    let totalSum = 0
                    const $arrayLength = $inputArray.length

                    for (let $index = 0; $index < $arrayLength; $index++) {
                        $totalSum += $inputArray[$index]
                    }

                    return $totalSum
                }
            }
        };

        let structureSelectorTwo = function () {
            const Calculate = {
                sum($inputArray) {
                    let totalSum = 0
                    const $arrayLength = $inputArray.length

                    for (let $index = 0; $index < $arrayLength; $index++) {
                        $totalSum = $totalSum + $inputArray[$index]
                    }

                    return $totalSum
                }
            }
        };

        let structureSelectorThree = function () {
            const Calculate = {
                sum($inputArray) {
                    let totalSum = 0
                    const $arrayLength = $inputArray.length

                    for (let $index = 0; $index < $arrayLength; $index++) {
                        $totalSum = $inputArray[$index] + $totalSum
                    }

                    return $totalSum
                }
            }
        };

        let isMatchSelectorOne = Structured.match(code, structureSelectorOne);
        let isMatchSelectorTwo = Structured.match(code, structureSelectorTwo);
        let isMatchSelectorThree = Structured.match(code, structureSelectorThree);

        let failureMessage = 'Did you write a `for` loop in your `Calculate` object to add each value in the `inputArray` array?';

        assert.isOk(isMatchSelectorOne || isMatchSelectorTwo || isMatchSelectorThree, failureMessage)
    })
})

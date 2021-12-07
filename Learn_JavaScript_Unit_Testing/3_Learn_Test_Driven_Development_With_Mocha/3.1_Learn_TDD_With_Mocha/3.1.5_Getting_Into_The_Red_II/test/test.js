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
                    it(_, () => {
                        const $setupOne = 22;
                        const $setupTwo = [4, 5, 6, 7];
                        const $result = Calculate.sum($setupTwo);

                        assert.equal($result, $solution);
                    });
                });
            });
        };

        let structureSelectorTwo = function () {
            describe('Calculate', () => {
                describe('.sum', () => {
                    it(_, () => {
                        const $setupOne = [4, 5, 6, 7];
                        const $setupTwo = 22;

                        const $result = Calculate.sum($setupOne2);

                        assert.equal($result, $solution2);
                    });
                });
            });
        };


        /*const varCallbacks = [
          function($result) {
            if ($result.value !== 22) {
              return { failure: 'Did you save the result of Calculate.sum() to a variable in the exercise phase?' + $result.value}
            } else {  
              return true;
            }
          }
        ]*/

        let isMatchSelectorOne = Structured.match(code, structureSelectorOne);
        let isMatchSelectorTwo = Structured.match(code, structureSelectorTwo);

        let failureMessage = 'Did you add another `it` block, and assert that the solution and result should be equal?';

        assert.isOk(isMatchSelectorOne || isMatchSelectorTwo, failureMessage)
    })
})

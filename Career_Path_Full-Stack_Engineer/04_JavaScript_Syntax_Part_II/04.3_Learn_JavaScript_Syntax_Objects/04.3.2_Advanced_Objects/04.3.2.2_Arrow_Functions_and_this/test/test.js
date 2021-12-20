console.log = function () { };
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureOne = function () {
            const robot = {
                checkEnergy: () => {
                }
            }
        };

        let structureTwo = function () {
            const robot = {
                checkEnergy() {
                }
            }
        };

        let structureThree = function () {
            const robot = {
                checkEnergy: function () {
                }
            }
        };

        let isMatchOne = Structured.match(code, structureOne);
        let isMatchTwo = Structured.match(code, structureTwo);
        let isMatchThree = Structured.match(code, structureThree);

        assert.isNotOk(isMatchOne, 'Did you change the arrow function to use a function expression?')
        assert.isOk(isMatchTwo || isMatchThree, 'Did you change the value of `checkEnergy` to be a function expression? You can use either the longhand method or the shorthand ES6 method.')
    });
});

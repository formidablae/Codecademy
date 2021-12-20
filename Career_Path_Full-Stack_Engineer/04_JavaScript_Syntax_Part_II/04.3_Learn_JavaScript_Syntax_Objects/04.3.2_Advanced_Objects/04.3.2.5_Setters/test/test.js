console.log = function () { };
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureOne = function () {
            const robot = {
                _numOfSensors: $num,
                set numOfSensors(num) {

                }
            }
        };

        let isMatchOne = Structured.match(code, structureOne);

        assert.isOk(isMatchOne, 'Did you add the setter method `numOfSensors` to `robot`?')
    });
});

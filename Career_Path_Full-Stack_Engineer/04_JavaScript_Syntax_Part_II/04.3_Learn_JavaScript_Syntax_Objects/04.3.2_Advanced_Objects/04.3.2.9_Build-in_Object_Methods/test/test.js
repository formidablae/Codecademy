console.log = function () { };
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureOne = function () {
            const robot = {
                model: 'SAL-1000',
                mobile: true,
                sentient: false,
                armor: 'Steel-plated',
                energyLevel: 75,
            }
        };

        let structureTwo = function () {
            const robotKeys = Object.keys(robot)
        }

        let isMatchOne = Structured.match(code, structureOne);
        let isMatchTwo = Structured.match(code, structureTwo);

        assert.isOk(isMatchOne, "Please don't change the `robot` object.")
        assert.isOk(isMatchTwo, "Did you add the missing argument to `Object.keys()`?")
    });
});

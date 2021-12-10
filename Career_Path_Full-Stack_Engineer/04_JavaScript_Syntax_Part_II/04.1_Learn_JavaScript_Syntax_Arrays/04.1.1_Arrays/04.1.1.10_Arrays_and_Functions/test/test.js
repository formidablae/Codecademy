console.log = function () { };
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureOne = function () {
            changeArr(concept);

            console.log(concept);
        };

        let isMatchOne = Structured.match(code, structureOne);

        assert.isOk(isMatchOne, 'Did you log `concept` to the console after calling `changeArr(concept)`?')
    });
});

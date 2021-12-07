console.log = function () { };
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureSelector = function () {
            const Calculate = {
            };

            module.exports = Calculate;
        };

        let isMatchSelector = Structured.match(code, structureSelector);
        let failureMessage = 'Did you declare the `Calculate` object?';

        assert.isOk(isMatchSelector, failureMessage)
    })
})

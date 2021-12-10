console.log = function () { };
var rewire = require('rewire'),
    appModule = rewire('../main.js');
const { assert, expect } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
    it('', function () {
        expect(appModule.__get__('chores')).to.have.length.below(5);
    });
    it('', function () {
        let structureOne = function () {
            chores.pop()
        };

        let isMatchOne = Structured.match(code, structureOne)

        assert.isOk(isMatchOne, 'Did you use `.pop()` to remove one item from `chores` (there should be less than 5 items in the array now)?')
    });
});

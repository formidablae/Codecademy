console.log = function () { };
var rewire = require('rewire'),
    appModule = rewire('../main.js');
const { expect } = require('chai');

describe('', function () {
    it('', function () {
        const robot = appModule.__get__('robot')
        expect(robot._energyLevel, "Did you reassign the `_energyLevel` property of `robot` to `high`?").to.contain('high');
    });
});

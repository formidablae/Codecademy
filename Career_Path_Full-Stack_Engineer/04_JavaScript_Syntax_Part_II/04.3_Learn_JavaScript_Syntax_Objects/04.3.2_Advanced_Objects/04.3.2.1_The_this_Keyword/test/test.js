console.log = function () { };
var rewire = require('rewire'),
    appModule = rewire('../main.js');
const { expect } = require('chai');

describe('', function () {
    it('', function () {
        const robot = appModule.__get__('robot')
        expect(robot, "Did you add a property of `model` to `robot`?").to.have.property('model');
        expect(robot.model, "Did you add a property of `model` with a value of `'1E78V2'` to `robot`?").to.deep.equal('1E78V2');
        expect(robot, "Did you add a property of `energyLevel` to `robot`?").to.have.property('energyLevel');
        expect(robot.energyLevel, "Did you add a property of `energyLevel` with a value of `100` to `robot`?").to.deep.equal(100);
    });
});

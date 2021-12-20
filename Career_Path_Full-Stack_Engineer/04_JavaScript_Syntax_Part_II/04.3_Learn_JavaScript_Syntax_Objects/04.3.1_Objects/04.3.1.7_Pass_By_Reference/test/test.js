console.log = () => { }
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.\n').to.equal(false);
        }
        let spaceship
        try {
            spaceship = appModule.__get__("spaceship");
        } catch (e) {
            expect(true, 'Did you accidentally delete the `spaceship` object?\n').to.equal(false);
        }
        let greenEnergy
        try {
            greenEnergy = appModule.__get__("greenEnergy");
        } catch (e) {
            expect(true, 'Did you create `greenEnergy`?\n').to.equal(false);
        }
        expect(greenEnergy, "`greenEnergy` should be either a function expression or a function declaration.").to.be.an.instanceOf(Function);
        let testObj = { 'Fuel Type': 'test' }
        greenEnergy(testObj)
        let newFuel = testObj['Fuel Type']
        expect(newFuel, "`greenEnergy()` should accept an object as an argument and set that object's `'Fuel Type'` property to `'avocado oil'` ").to.equal('avocado oil');
    });
});

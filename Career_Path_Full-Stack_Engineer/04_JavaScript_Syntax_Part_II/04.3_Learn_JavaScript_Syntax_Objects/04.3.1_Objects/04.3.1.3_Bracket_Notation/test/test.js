console.log = function () { }
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
            expect(true, 'Did you delete the `spaceship` object?\n').to.equal(false);
        }

        let isActive
        try {
            isActive = appModule.__get__("isActive");
        } catch (e) {
            expect(true, 'Did you create an `isActive` variable?\n').to.equal(false);
        }

        expect((isActive), "Your `isActive` variable should be assigned the value of the `spaceship` object's `'Active Mission'` property").to.equal(spaceship['Active Mission'])
    });
});

console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let checkThatTwoPlusTwoEqualsFourAMillionTimes
        try {
            var appModule = rewire("../app.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        try {
            checkThatTwoPlusTwoEqualsFourAMillionTimes = appModule.__get__("checkThatTwoPlusTwoEqualsFourAMillionTimes");
        } catch (e) {
            expect(true, 'Did you create checkThatTwoPlusTwoEqualsFourAMillionTimes?').to.equal(false);
        }
        let is2p2
        try {
            is2p2 = appModule.__get__("is2p2");
        } catch (e) {
            expect(true, 'Did you create is2p2?').to.equal(false);
        }

        expect(is2p2, "`is2p2` should be a function.").to.be.an.instanceOf(Function);
        expect((is2p2 === checkThatTwoPlusTwoEqualsFourAMillionTimes), "Your `is2p2` variable should have the value of the `checkThatTwoPlusTwoEqualsFourAMillionTimes` function?").to.equal(true)
    });
});

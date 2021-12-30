console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let checkThatTwoPlusTwoEqualsFourAMillionTimes
        let appModule
        try {
            appModule = rewire("../app.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        try {
            checkThatTwoPlusTwoEqualsFourAMillionTimes = appModule.__get__("checkThatTwoPlusTwoEqualsFourAMillionTimes");
        } catch (e) {
            expect(true, 'Did you delete `checkThatTwoPlusTwoEqualsFourAMillionTimes`?').to.equal(false);
        }
        let timeFuncRuntime
        try {
            timeFuncRuntime = appModule.__get__("timeFuncRuntime");
        } catch (e) {
            expect(true, 'Did you delete `timeFuncRuntime`?').to.equal(false);
        }

        let time2p2
        try {
            time2p2 = appModule.__get__("time2p2");
        } catch (e) {
            expect(true, 'Did you create time2p2?').to.equal(false);
        }

        expect((typeof time2p2 === 'number'), '`time2p2` should be assigned the `timeFuncRuntime` function invoked with `checkThatTwoPlusTwoEqualsFourAMillionTimes` as its argument.').to.equal(true);
    });
});

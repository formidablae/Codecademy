console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
//var appModule = rewire("../main.js")
var sinon = require('sinon')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let declineEverything
        try {
            declineEverything = appModule.__get__("declineEverything");
        } catch (e) {
            expect(true, 'Did you create `declineEverything`?').to.equal(false);
        }

        let politelyDecline
        try {
            politelyDecline = appModule.__get__("politelyDecline");
        } catch (e) {
            expect(true, 'Did you accidentally delete `politelyDecline`?').to.equal(false);
        }
        expect(declineEverything, "`declineEverything` should still be either a function expression or a function declaration?").to.be.an.instanceOf(Function);


        let veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

        var forEachSpy = sinon.spy(Array.prototype, 'forEach')

        declineEverything(veggies)
        expect(forEachSpy.called, "Does your function call `forEach()`?").to.equal(true)
        expect(forEachSpy.calledOn(veggies), "Does your function call `forEach()` on the array that was passed into it?").to.equal(true)
        expect(forEachSpy.calledWith(politelyDecline), "Does your function pass the `politelyDecline()` function into `forEach()`?").to.equal(true)

    })
})

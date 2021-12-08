console.log = function () { };
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let numImaginaryFriends

        try {
            numImaginaryFriends = appModule.__get__("numImaginaryFriends");
        } catch (e) {
            expect(true, 'Did you create numImaginaryFriends?').to.equal(false);
        }

        expect(numImaginaryFriends, "Did you create numImaginaryFriends as either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        expect(numImaginaryFriends(5), "Your function should return a number.").to.be.a('number');

        expect(numImaginaryFriends(4), "Your function should round the number of imaginary friends up to the nearest whole number. For example, 2.5 should round up to 3").to.equal(1);

        expect(numImaginaryFriends(20), "Your function should round the number of imaginary friends up to the nearest whole number. For example, 2.5 should round up to 3").to.equal(5)

        expect(numImaginaryFriends(10), "Your function should round the number of imaginary friends up to the nearest whole number. For example, 2.5 should round up to 3").to.equal(3)

        expect(numImaginaryFriends(100), "Your function should round the number of imaginary friends up to the nearest whole number. For example, 2.5 should round up to 3").to.equal(25)

    });
});

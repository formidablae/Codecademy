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
        let smallestPowerOfTwo
        try {
            smallestPowerOfTwo = appModule.__get__("smallestPowerOfTwo");
        } catch (e) {
            expect(true, 'Did you delete `smallestPowerOfTwo`?\n').to.equal(false);
        }

        expect(smallestPowerOfTwo, "`smallestPowerOfTwo` should still be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        const numbers = [5, 3, 9, 30];
        const newNumbers = [6, 8, 1000, 781];
        const yetMoreNumbers = [53, 2, 7, 41];

        expect(smallestPowerOfTwo(numbers), "Your function should return an array with the power of two which is greater than the value of each number element in the array.").to.eql([8, 4, 16, 32])

        expect(smallestPowerOfTwo(newNumbers), "Your function should work on any array of numbers, not just the `numbers` array.").to.eql([8, 8, 1024, 1024])

        expect(smallestPowerOfTwo(yetMoreNumbers), "Your function should work on any array of numbers, not just the `numbers` array.").to.eql([64, 2, 8, 64])
    });
});

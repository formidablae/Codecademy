console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
var sinon = require('sinon')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let squareNums
        try {
            squareNums = appModule.__get__("squareNums");
        } catch (e) {
            expect(true, 'Did you create `squareNums`?').to.equal(false);
        }
        expect(squareNums, "`squareNums` should be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        const numbers = [2, 7, 9, 171, 52, 33, 14]

        var mapSpy = sinon.spy(Array.prototype, 'map')

        let testArray = squareNums(numbers)
        expect(mapSpy.called, "Does your function call `map()`?").to.equal(true)
        expect(mapSpy.calledOn(numbers), "Does your function call `map()` on the array that was passed into it?").to.equal(true)
        expect(testArray, "Does your function pass a function into `map()` that takes in a number and returns the square of that number?").to.eql([4, 49, 81, 29241, 2704, 1089, 196])

    })
})

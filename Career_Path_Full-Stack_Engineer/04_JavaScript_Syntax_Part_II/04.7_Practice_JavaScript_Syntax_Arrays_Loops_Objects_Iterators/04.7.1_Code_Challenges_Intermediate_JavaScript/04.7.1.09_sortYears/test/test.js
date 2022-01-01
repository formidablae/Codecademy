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
        let sortYears
        try {
            sortYears = appModule.__get__("sortYears");
        } catch (e) {
            expect(true, 'Did you create `sortYears`?').to.equal(false);
        }
        expect(sortYears, "`sortYears` should be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        const testYears = [1200, 1799, 1990, 1710, 2052, 1933, 2014]

        var sortSpy = sinon.spy(Array.prototype, 'sort')

        sortYears(testYears)
        expect(sortSpy.called, "Does your function call `sort()`?").to.equal(true)
        expect(sortSpy.calledOn(testYears), "Does your function call `sort()` on the array that was passed into it?").to.equal(true)
        expect(testYears, "Does your `sortYears()` function pass a function into the `sort()` method so that it the years are sorted in descending order?").to.eql([2052, 2014, 1990, 1933, 1799, 1710, 1200])

    })
})

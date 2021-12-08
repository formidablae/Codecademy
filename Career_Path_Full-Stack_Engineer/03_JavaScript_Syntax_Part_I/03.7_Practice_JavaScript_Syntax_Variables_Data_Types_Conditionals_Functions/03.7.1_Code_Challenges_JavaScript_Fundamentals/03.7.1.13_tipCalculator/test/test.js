console.log = function () { };
const { expect } = require('chai')
const rewire = require('rewire');
//var appModule = rewire("../main.js")

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(e, 'Double check your code. It likely has a syntax error.\n').to.not.exist;
        }
        let tipCalculator
        try {
            tipCalculator = appModule.__get__("tipCalculator");
        } catch (e) {
            expect(e, 'did you create tipCalculator?\n').to.not.exist;
        }

        expect(tipCalculator, "Did you create tipCalculator as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(tipCalculator, "Did you create tipCalculator as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(tipCalculator("bad", 100), "If 'bad' is entered, the function should return 5% of the total passed in").to.equal(5)

        expect(tipCalculator("ok", 100), "If 'ok' is entered, the function should return 15% of the total passed in").to.equal(15)

        expect(tipCalculator("good", 100), "If 'good' is entered, the function should return 20% of the total passed in").to.equal(20)

        expect(tipCalculator("excellent", 100), "If 'excellent' is entered, the function should return 30% of the total passed in").to.equal(30)

        expect(tipCalculator("random string", 100), "For any quality input other than bad, ok, good, or excellent, the function should return 18% of the total passed in").to.equal(18)


        expect(tipCalculator("bad", 67), "If 'bad' is entered, the function should return 5% of the total passed in").to.equal(3.35)

        expect(tipCalculator("ok", 71), "If 'ok' is entered, the function should return 15% of the total passed in").to.equal(10.65)

        expect(tipCalculator("good", 67), "If 'good' is entered, the function should return 20% of the total passed in").to.equal(13.4)

        expect(tipCalculator("excellent", 42), "If 'excellent' is entered, the function should return 30% of the total passed in").to.equal(12.6)

        expect(tipCalculator("random string", 81), "For any quality input other than bad, ok, good, or excellent, the function should return 18% of the total passed in").to.equal(14.58)
    });
});

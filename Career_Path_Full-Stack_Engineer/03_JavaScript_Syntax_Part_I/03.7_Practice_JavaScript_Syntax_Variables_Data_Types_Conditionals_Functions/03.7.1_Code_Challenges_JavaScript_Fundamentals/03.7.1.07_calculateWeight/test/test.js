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

        let calculateWeight
        try {
            calculateWeight = appModule.__get__("calculateWeight");
        } catch (e) {
            expect(true, 'Did you create calculateWeight?').to.equal(false);
        }

        expect(calculateWeight, "Did you create calculateWeight as either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        expect(calculateWeight(100, 'Blorgus'), "If the planet passed as an argument is anything other than the Mercury, Venus, Mars, Jupiter or Saturn, your function should return: 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' ").to.equal('Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.')

        expect(calculateWeight(100, 'Mercury'), "When the planet is Mercury, the function should return the weight passed in multiplied by .378").to.equal(37.8)

        expect(calculateWeight(100, 'Venus'), "When the planet is Venus, the function should return the weight passed in multiplied by .907").to.equal(90.7)

        expect(calculateWeight(100, 'Mars'), "When the planet is Mars, the function should return the weight passed in multiplied by .377").to.equal(37.7)

        expect(calculateWeight(100, 'Jupiter'), "When the planet is Jupiter, the function should return the weight passed in multiplied by 2.36").to.equal(236)

        //this is hacky?
        expect(+calculateWeight(100, 'Saturn').toPrecision(3), "When the planet is Saturn, the function should return the weight passed in multiplied by .916").to.equal(91.6)

    });
});

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
        let lifePhase
        try {
            lifePhase = appModule.__get__("lifePhase");
        } catch (e) {
            expect(e, 'Did you create lifePhase?\n').to.not.exist;
        }

        expect(lifePhase, "Did you create lifePhase as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(lifePhase, "Did you create lifePhase as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(lifePhase(-1), "If the argument passed in is less than 0, the function should return 'This is not a valid age'").to.equal('This is not a valid age')

        expect(lifePhase(160), "If the argument passed in is greater than 140, the function should return 'This is not a valid age'").to.equal('This is not a valid age')

        expect(lifePhase(2), "If the argument passed in is greater than or equal to 0 and less than or equal to 3, the function should return 'baby'").to.equal('baby')

        expect(lifePhase(4), "If the argument passed in is greater than or equal to 4 and less than or equal to 12, the function should return 'child'").to.equal('child')

        expect(lifePhase(9), "If the argument passed in is greater than or equal to 4 and less than or equal to 12, the function should return 'child'").to.equal('child')

        expect(lifePhase(12), "If the argument passed in is greater than or equal to 4 and less than or equal to 12, the function should return 'child'").to.equal('child')

        expect(lifePhase(13), "If the argument passed in is greater than or equal to 13 and less than or equal to 19, the function should return 'teen'").to.equal('teen')

        expect(lifePhase(16), "If the argument passed in is greater than or equal to 13 and less than or equal to 19, the function should return 'teen'").to.equal('teen')

        expect(lifePhase(19), "If the argument passed in is greater than or equal to 13 and less than or equal to 19, the function should return 'teen'").to.equal('teen')

        expect(lifePhase(20), "If the argument passed in is greater than or equal to 20 and less than or equal to 64, the function should return 'adult'").to.equal('adult')

        expect(lifePhase(45), "If the argument passed in is greater than or equal to 20 and less than or equal to 64, the function should return 'adult'").to.equal('adult')

        expect(lifePhase(64), "If the argument passed in is greater than or equal to 20 and less than or equal to 64, the function should return 'adult'").to.equal('adult')

        expect(lifePhase(65), "If the argument passed in is greater than or equal to 65, the function should return 'senior citizen'").to.equal('senior citizen')

        expect(lifePhase(70), "If the argument passed in is greater than or equal to 65, the function should return 'senior citizen'").to.equal('senior citizen')

        expect(lifePhase(139), "If the argument passed in is greater than or equal to 65, the function should return 'senior citizen'").to.equal('senior citizen')

    });

});

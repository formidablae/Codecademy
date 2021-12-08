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
        let finalGrade
        try {
            finalGrade = appModule.__get__("finalGrade");
        } catch (e) {
            expect(e, 'did you create finalGrade?\n').to.not.exist;
        }

        expect(finalGrade, "Did you create finalGrade as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(finalGrade, "Did you create finalGrade as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(finalGrade(1, 1, 180), "If any of the grades passed in are less than 0 or greater than 100, the function should return 'You have entered an invalid grade.'").to.equal('You have entered an invalid grade.')

        expect(finalGrade(-1, 80, 80), "If any of the grades passed in are less than 0 or greater than 100, the function should return 'You have entered an invalid grade.'").to.equal('You have entered an invalid grade.')

        expect(finalGrade(0, 800, 80), "If any of the grades passed in are less than 0 or greater than 100, the function should return 'You have entered an invalid grade.'").to.equal('You have entered an invalid grade.')

        expect(finalGrade(0, -900, 80), "If any of the grades passed in are less than 0 or greater than 100, the function should return 'You have entered an invalid grade.'").to.equal('You have entered an invalid grade.')

        expect(finalGrade(30, 28, 50), "If the average of the three grades is greater than or equal to 0 but less than or equal to 59, the function should return 'F'").to.equal('F')

        expect(finalGrade(30, 90, 65), "If the average of the three grades is greater than or equal to 60 but less than or equal to 69, the function should return 'D'").to.equal('D')

        expect(finalGrade(56, 92, 68), "If the average of the three grades is greater than or equal to 70 but less than or equal to 79, the function should return 'C'").to.equal('C')

        expect(finalGrade(78, 92, 81), "If the average of the three grades is greater than or equal to 80 but less than or equal to 89, the function should return 'B'").to.equal('B')

        expect(finalGrade(91, 92, 96), "If the average of the three grades is greater than or equal to 90, the function should return 'A'").to.equal('A')

    });

});

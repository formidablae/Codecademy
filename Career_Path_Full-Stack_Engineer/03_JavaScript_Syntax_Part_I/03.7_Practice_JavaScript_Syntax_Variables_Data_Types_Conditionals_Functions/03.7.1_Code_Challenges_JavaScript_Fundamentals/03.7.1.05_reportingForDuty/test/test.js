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
        let reportingForDuty
        try {
            reportingForDuty = appModule.__get__("reportingForDuty");
        } catch (e) {
            expect(e, 'did you create reportingForDuty?\n').to.not.exist;
        }

        expect(reportingForDuty, "Did you create reportingForDuty as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(reportingForDuty, "Did you create reportingForDuty as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(reportingForDuty('Private', 'Fido'), "Your function should accept two strings as arguments and return a string in the following format: 'rank lastName reporting for duty, sir!'").to.equal('Private Fido reporting for duty!')

        expect(reportingForDuty('hey', 'bro'), "Your function should accept two strings as arguments and return a string in the following format: 'rank lastName reporting for duty, sir!'").to.equal('hey bro reporting for duty!')
    })
});

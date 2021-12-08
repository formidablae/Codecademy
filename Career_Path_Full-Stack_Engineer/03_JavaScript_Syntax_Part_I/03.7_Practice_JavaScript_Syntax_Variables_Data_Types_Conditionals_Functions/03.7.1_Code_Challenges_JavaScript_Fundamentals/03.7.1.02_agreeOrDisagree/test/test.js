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
        let agreeOrDisagree
        try {
            agreeOrDisagree = appModule.__get__("agreeOrDisagree");
        } catch (e) {
            expect(true, 'Did you create agreeOrDisagree?').to.equal(false);
        }

        expect(agreeOrDisagree, "Did you create agreeOrDisagree as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(agreeOrDisagree, "Did you create agreeOrDisagree as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(agreeOrDisagree("1", "1"), "When the two strings passed in are the same, your function should return 'You agree!'").to.equal('You agree!')
        expect(agreeOrDisagree("1", "2"), "When the two strings passed in are the different, your function should return 'You disagree!'").to.equal('You disagree!')

    });
});

console.log = function () { };
const { expect } = require('chai')
const rewire = require('rewire');
//var appModule = rewire("../main.js")

describe('', function () {
    it('', function () {
        let canIVote
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(e, 'Double check your code. It likely has a syntax error.\n').to.not.exist;
        }
        try {
            canIVote = appModule.__get__("canIVote");
        } catch (e) {
            expect(e, 'did you create canIVote?\n').to.not.exist;
        }

        expect(canIVote, "Did you create canIVote as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(canIVote, "Did you create canIVote as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(canIVote(1), "If the argument passed in is less than 18, the function should return false").to.equal(false)

        expect(canIVote(17), "If the argument passed in is less than 18, the function should return false").to.equal(false)

        expect(canIVote(18), "If the argument passed in is greater than or equal to 18, the function should return true").to.equal(true)

        expect(canIVote(100), "If the argument passed in is greater than or equal to 18, the function should return true").to.equal(true)
    });
});

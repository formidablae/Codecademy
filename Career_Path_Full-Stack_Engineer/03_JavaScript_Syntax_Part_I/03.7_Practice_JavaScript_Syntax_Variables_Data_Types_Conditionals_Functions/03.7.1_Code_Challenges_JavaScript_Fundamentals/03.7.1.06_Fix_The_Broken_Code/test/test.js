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
        let rollTheDice
        try {
            rollTheDice = appModule.__get__("rollTheDice");
        } catch (e) {
            expect(e, 'did you create rollTheDice?\n').to.not.exist;
        }

        expect(rollTheDice, "Did you create rollTheDice as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(rollTheDice, "Did you create rollTheDice as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        let rolls = [];

        for (i = 0; i < 200; i++) {
            rolls.push(rollTheDice())
        }
        //console.log(rolls)
        expect(rolls.every(roll => (roll > 1 && roll < 13)), "Your function should always return a value greater than or equal to 2 and less than or equal to 12").to.equal(true)
    })
});

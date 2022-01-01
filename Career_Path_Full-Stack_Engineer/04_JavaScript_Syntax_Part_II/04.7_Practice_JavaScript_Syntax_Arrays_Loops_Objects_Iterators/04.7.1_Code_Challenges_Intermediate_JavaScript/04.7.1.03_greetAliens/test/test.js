//console.log = function() {}
const { expect } = require('chai')
let logs = [];
console.log = () => { }
const rewire = require('rewire');
var sinon = require('sinon');

/*
var appModule = rewire("../main.js")

appModule.__set__('console', {
 log: (...args) => { logs.push(...args)}
})
*/

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(false, 'Double check your code. It likely has a syntax error').to.equal(true);
        }
        appModule.__set__('console', {
            log: (...args) => { logs.push(...args) }
        })
        let greetAliens
        try {
            greetAliens = appModule.__get__("greetAliens");
        } catch (e) {
            expect(false, 'Did you create greetAliens?').to.equal(true);
        }

        expect(greetAliens, "Did you create greetAliens as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(greetAliens, "Did you create greetAliens as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        var forEachSpy = sinon.spy(Array.prototype, 'forEach')

        greetAliens(["test"])

        expect(logs.includes("Oh powerful test, we humans offer our unconditional surrender!"), "this is the one now").to.equal(true)

        expect(forEachSpy.notCalled, "Sorry but you are not allowed to use the built-in `forEach` method for this problem!").to.equal(true)
    });
});

console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
//var appModule = rewire("../main.js")
var sinon = require('sinon')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let convertToBaby
        try {
            convertToBaby = appModule.__get__("convertToBaby");
        } catch (e) {
            expect(true, 'Did you create convertToBaby?\n').to.equal(false);
        }

        expect(convertToBaby, "Did you create convertToBaby as either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        var mapSpy = sinon.spy(Array.prototype, 'map')

        let animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human']

        expect(convertToBaby(animals), "Your function should return an array with all of the elements of the argument array prepended with 'baby'").to.eql(['baby panda',
            'baby turtle',
            'baby giraffe',
            'baby hippo',
            'baby sloth',
            'baby human'])

        let newArr = ['random', 'test', 'array', 'of', 'strings']
        expect(convertToBaby(newArr), "Your function should work on any array of strings, not just the `animals` array.").to.eql(['baby random',
            'baby test',
            'baby array',
            'baby of',
            'baby strings'])

        expect(mapSpy.notCalled, "Sorry but you are not allowed to use the built-in `map` method for this problem!")
    });
});

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
            expect(e, 'Double check your code. It likely has a syntax error.\n').to.not.exist;
        }
        let reverseArray
        try {
            reverseArray = appModule.__get__("reverseArray");
        } catch (e) {
            expect(e, 'did you create reverseArray?\n').to.not.exist;
        }

        expect(reverseArray, "Did you create reverseArray as either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        var reverseSpy = sinon.spy(Array.prototype, 'reverse')

        expect(reverseArray([1, 2, 3]), "Your function should return an array with the elements of the argument array in reversed order. It should work on arrays of numbers.").to.eql([3, 2, 1])

        expect(reverseArray(["str1", "str2", "str2", "str4"]), "Your function should return an array with the elements of the argument array in reversed order. It should work on arrays of strings.").to.eql(['str4', 'str2', 'str2', 'str1'])

        expect(reverseArray([{ 1: 1 }, { 2: 2 }, { 3: 3 }]), "Your function should return an array with the elements of the argument array in reversed order. It should work on arrays of objects.").to.eql([{ '3': 3 }, { '2': 2 }, { '1': 1 }])

        expect(reverseArray([[1], [2], [3]]), "Your function should return an array with the elements of the argument array in reversed order. It should work on arrays of arrays.").to.eql([[3], [2], [1]])

        expect(reverseSpy.notCalled, "Sorry but you are not allowed to use the built-in `reverse` method for this problem!").to.equal(true)
    });
});

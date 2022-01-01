console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
var sinon = require('sinon')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let justCoolStuff
        try {
            justCoolStuff = appModule.__get__("justCoolStuff");
        } catch (e) {
            expect(true, 'Did you create `justCoolStuff`?\n').to.equal(false);
        }
        expect(justCoolStuff, "`justCoolStuff` should be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        const coolStuff = ['gameboys', 'skateboards', 'backwards hats', 'fruit-by-the-foot', 'pogs', 'my room', 'temporary tattoos'];
        const myStuff = ['rules', 'fruit-by-the-foot', 'wedgies', 'sweaters', 'skateboards', 'family-night', 'my room', 'braces', 'the information superhighway'];

        var filterSpy = sinon.spy(Array.prototype, 'filter')

        let testArray = justCoolStuff(myStuff, coolStuff)
        expect(filterSpy.called, "Does your function call `filter()`?").to.equal(true)
        expect(filterSpy.calledOn(myStuff), "Does your function call `filter()` on the first array that was passed into it?").to.equal(true)

        expect(testArray, "Does your function return an array?").to.be.an.instanceof(Array);
        expect(testArray, "Does your function return an array with only the elements from the first array argument that are included in the second array argument?").to.eql(['fruit-by-the-foot', 'skateboards', 'my room'])
    })
})

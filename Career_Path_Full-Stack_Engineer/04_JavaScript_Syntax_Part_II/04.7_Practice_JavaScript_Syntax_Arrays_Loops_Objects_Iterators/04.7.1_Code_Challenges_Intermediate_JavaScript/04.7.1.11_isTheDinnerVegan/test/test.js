console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let isTheDinnerVegan
        try {
            isTheDinnerVegan = appModule.__get__("isTheDinnerVegan");
        } catch (e) {
            expect(true, 'Did you create `isTheDinnerVegan`?\n').to.equal(false);
        }

        expect(isTheDinnerVegan, "`isTheDinnerVegan` should be either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        const dinner = [{ name: 'hamburger', source: 'meat' }, { name: 'cheese', source: 'dairy' }, { name: 'ketchup', source: 'plant' }, { name: 'bun', source: 'plant' }, { name: 'dessert twinkies', source: 'unknown' }];
        expect(isTheDinnerVegan(dinner), "Your function should return `false` if not every object in the array has `source: 'dairy'`.").to.equal(false)
        const newDin = [{ name: 'one', source: 'plant' }, { name: 'two', source: 'plant' }, { name: 'three', source: 'plant' },]
        expect(isTheDinnerVegan(newDin), "Your function should return `true` if every object in the array has `source: 'dairy'`.").to.equal(true)
    });
});

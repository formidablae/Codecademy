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
        let dogFactory
        try {
            dogFactory = appModule.__get__("dogFactory");
        } catch (e) {
            expect(true, 'Did you create dogFactory?\n').to.equal(false);
        }
        expect(dogFactory, "Did you create dogFactory as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        let testDog = dogFactory("Cody", "Yellow Lab", 70)
        expect(testDog, "Does your dogFactory function return an object?").to.be.an.instanceOf(Object);
        expect(testDog.name, "Did you add `name` as a property on the object you return and assign its value to the name passed in to the function?").to.equal("Cody")
        expect(testDog.breed, "Did you add `breed` as a property on the object you return and assign its value to the breed passed in to the function?").to.equal("Yellow Lab")
        expect(testDog.weight, "Did you add `weight` as a property on the object you return and assign its value to the weight passed in to the function?").to.equal(70)
    })
})

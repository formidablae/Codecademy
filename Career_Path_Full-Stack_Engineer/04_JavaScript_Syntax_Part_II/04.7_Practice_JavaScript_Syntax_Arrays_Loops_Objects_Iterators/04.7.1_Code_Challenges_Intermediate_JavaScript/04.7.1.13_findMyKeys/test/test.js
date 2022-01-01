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
        let findMyKeys
        try {
            findMyKeys = appModule.__get__("findMyKeys");
        } catch (e) {
            expect(true, 'Did you create `findMyKeys`?\n').to.equal(false);
        }

        expect(findMyKeys, "`findMyKeys` should be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon']

        expect(findMyKeys(randomStuff), "Your function should return the index in the array where 'keys' are located.").to.equal(4)

        const noKeysArray = ['credit card', 'screwdriver', 'receipt', 'gum', 'used gum', 'plastic spoon']

        expect(findMyKeys(noKeysArray), "Your function should return -1 if there are no 'keys' in the array.").to.equal(-1)
    });
});

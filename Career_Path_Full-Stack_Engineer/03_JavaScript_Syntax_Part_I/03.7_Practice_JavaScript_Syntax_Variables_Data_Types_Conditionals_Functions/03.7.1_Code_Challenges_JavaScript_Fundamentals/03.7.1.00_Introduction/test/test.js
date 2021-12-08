console.log = function () { };
const { expect } = require('chai')
const rewire = require('rewire');

describe('', function () {
    it('', function () {
        let greetWorld
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        try {
            greetWorld = appModule.__get__("greetWorld");
        } catch (e) {
            expect(true, 'Did you create `greetWorld()`?').to.equal(false);
        }

        expect(greetWorld, "Did you create `greetWorld()` as either a function expression or a function declaration? Our test checked made sure that your code contained a function named `greetWorld()`  and found that it did not.").to.be.an.instanceOf(Function);

        var test = greetWorld();
        expect(test, "Your function should return the string `'Hello, World!'`. Expected: Hello, World! but your function returned: `" + test + "`. Our test invoked your function and saved the value it returned. We expected it to equal the exact value specified (`'Hello, World!'`) and found it did not.").to.equal("Hello, World!")

    });
});

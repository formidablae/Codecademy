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
        let sillySentence
        try {
            sillySentence = appModule.__get__("sillySentence");
        } catch (e) {
            expect(e, 'did you create sillySentence?\n').to.not.exist;
        }

        expect(sillySentence, "Did you create sillySentence as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(sillySentence, "Did you create sillySentence as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(sillySentence('adjective', 'verb', 'noun'), "Did you use string concatenation or interpolation to fill in the blanks of this sentence: 'I am so ______ because I _______ coding! Time to write some more awesome _______!'?").to.equal('I am so adjective because I verb coding! Time to write some more awesome noun!')

        expect(sillySentence('haskgdkajdhg8768768', 'akhsgha8768768', 'banvsnsavb7726262'), "Did you use string concatenation or interpolation to fill in the blanks of this sentence: 'I am so ______ because I _______ coding! Time to write some more awesome _______!'?").to.equal('I am so haskgdkajdhg8768768 because I akhsgha8768768 coding! Time to write some more awesome banvsnsavb7726262!')

    });
});

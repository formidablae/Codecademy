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
        let shoutGreetings
        try {
            shoutGreetings = appModule.__get__("shoutGreetings");
        } catch (e) {
            expect(true, 'Did you create `shoutGreetings`?').to.equal(false);
        }
        expect(shoutGreetings, "`shoutGreetings` should be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo']
        let testArray = shoutGreetings(greetings)

        //it should return an array 
        expect(testArray, "Does your function return an array?").to.be.an('array')

        //that array should be all the elements capitalized and with !
        expect(testArray, "The array your function returns should contain each element from the argument array capitalized and with an exclamation point.").to.eql(['HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!'])
    })
})

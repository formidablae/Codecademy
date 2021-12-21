console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
var fs = require('fs');

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.\n').to.equal(false);
        }
        let spaceship
        try {
            spaceship = appModule.__get__("spaceship");
        } catch (e) {
            expect(true, 'Did you accidentally delete the `spaceship` object?\n').to.equal(false);
        }
        let capFave
        try {
            capFave = appModule.__get__("capFave");
        } catch (e) {
            expect(true, 'Did create a `capFave` variable?\n').to.equal(false);
        }
        expect(capFave, "`capFave` should be assigned to the value at the 0th index of the `captain`'s `'favorite foods'` array.").to.equal(spaceship.crew.captain['favorite foods'][0]);

        var regex = /capFave\s*\=\s*(`|'|")cookies(`|'|")/g;
        let theirCode = fs.readFileSync('./app.js', 'utf8');
        var found = regex.test(theirCode);
        expect(found, "You shouldn't assign the value of `capFave` by directly setting it to `'cookies'`. ie. `capFave = 'cookies';`. Instead navigate the nested object using operators.").to.equal(false)
    });
});

console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
var fs = require('fs')

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

        let crewCount
        try {
            crewCount = appModule.__get__("crewCount");
        } catch (e) {
            expect(true, 'Did you create an `crewCount` variable?\n').to.equal(false);
        }

        expect((crewCount), "Your `crewCount` variable should be assigned the value of the `spaceship` object's `numCrew` property").to.equal(spaceship.numCrew)


        var regex = /crewCount\s*\=\s*5/g;
        let theirCode = fs.readFileSync('./app.js', 'utf8');
        var found = regex.test(theirCode);
        expect(found, "You shouldn't assign the value of `crewCount` by directly setting it to `5`. ie. `crewCount = 5;`. Instead use property access.").to.equal(false)
        var regex2 = /spaceship.numCrew/g;
        var found2 = regex2.test(theirCode);
        expect(found2, "You should be using the dot operator to access the `numCrew` property on the `spaceship` object.").to.equal(true)
    });
});

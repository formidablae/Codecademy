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
            expect(true, 'Did you delete the `spaceship` object?\n').to.equal(false);
        }

        expect((spaceship.color), "Use the dot operator to assign the `spaceship`'s color property to `'glorious gold'`").to.equal('glorious gold')
        var regex1 = /spaceship\.color/g;
        var regex2 = /spaceship\s*\[\s*('|"|`)color('|"|`)\s*]/g;
        let theirCode = fs.readFileSync('./app.js', 'utf8');
        var found1 = regex1.test(theirCode);
        var found2 = regex2.test(theirCode);
        expect((found1 || found2), "You should update the `color` property on the `spaceship` object using the dot (`.`) operator (or bracket notation).").to.equal(true)

    });
});

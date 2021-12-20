console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
let logs = [];

describe('', function () {
    it('', function () {
        let appModule;
        try {
            appModule = rewire("../app.js")
        } catch (e) {
            expect(true, 'Try checking your code again. You likely have a syntax error.').to.equal(false);
        }
        let retreatMessage
        try {
            retreatMessage = appModule.__get__("retreatMessage");
        } catch (e) {
            expect(true, 'Did you accidentally delete the `retreatMessage` variable?').to.equal(false);
        }
        let alienShip
        try {
            alienShip = appModule.__get__("alienShip");
        } catch (e) {
            expect(true, 'Did you create an `alienShip` object literal?').to.equal(false);
        }
        appModule.__set__('console', {
            log: (...args) => { logs.push(...args) }
        })
        let { retreat } = alienShip;
        expect(retreat, "`retreat` should be a method on your `alienShip` object.").to.be.an.instanceOf(Function);
        retreat()
        expect(logs.includes('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.'), "Does your method log the string ''We no longer wish to conquer your planet. It is full of dogs, which we do not care for.'?").to.equal(true)
    });
});

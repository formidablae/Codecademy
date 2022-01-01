console.log = function () { }
const { expect } = require('chai')
const rewire = require('rewire');
var sinon = require('sinon')

describe('', function () {
    it('', function () {
        try {
            var appModule = rewire("../main.js");
        } catch (e) {
            expect(true, 'Double check your code. It likely has a syntax error.').to.equal(false);
        }
        let sortSpeciesByTeeth
        try {
            sortSpeciesByTeeth = appModule.__get__("sortSpeciesByTeeth");
        } catch (e) {
            expect(true, 'Did you create `sortSpeciesByTeeth`?\n').to.equal(false);
        }

        expect(sortSpeciesByTeeth, "`sortSpeciesByTeeth` should be either a function expression or a function declaration?").to.be.an.instanceOf(Function);

        const speciesArray1 = [{ speciesName: 'shark', numTeeth: 50 }, { speciesName: 'dog', numTeeth: 42 }, { speciesName: 'alligator', numTeeth: 80 }, { speciesName: 'human', numTeeth: 32 }];

        expect(sortSpeciesByTeeth(speciesArray1), "Your function should return the array with the objects sorted in order of `numTeeth`.").to.eql([{ speciesName: 'human', numTeeth: 32 },
        { speciesName: 'dog', numTeeth: 42 },
        { speciesName: 'shark', numTeeth: 50 },
        { speciesName: 'alligator', numTeeth: 80 }])

        const speciesArray2 = [{ speciesName: 'test1', numTeeth: 90 }, { speciesName: 'test2', numTeeth: 87 }, { speciesName: 'test3', numTeeth: 2 }, { speciesName: 'test4', numTeeth: 7 }];

        expect(sortSpeciesByTeeth(speciesArray2), "Your function should work on any array of objects with that format - not just the `species` array we provided.").to.eql([{ speciesName: 'test3', numTeeth: 2 },
        { speciesName: 'test4', numTeeth: 7 },
        { speciesName: 'test2', numTeeth: 87 },
        { speciesName: 'test1', numTeeth: 90 }])
    });
});

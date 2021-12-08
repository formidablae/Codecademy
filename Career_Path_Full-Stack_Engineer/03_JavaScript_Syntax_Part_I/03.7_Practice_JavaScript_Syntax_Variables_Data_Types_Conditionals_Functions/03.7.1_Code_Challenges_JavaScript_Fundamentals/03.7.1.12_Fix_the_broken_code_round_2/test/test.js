console.log = function () { };
const { expect } = require('chai')
const rewire = require('rewire');
var appModule = rewire("../main.js")

describe('', function () {
    it('', function () {
        let whatRelation
        try {
            whatRelation = appModule.__get__("whatRelation");
        } catch (e) {
            expect(e, 'did you create whatRelation?\n').to.not.exist;
        }

        expect(whatRelation, "Did you create whatRelation as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(whatRelation, "Did you create whatRelation as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(whatRelation(34), "Did you change the code to function properly?").to.equal('You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.')

        expect(whatRelation(3), "Try looking carefully at the third condition").to.equal('You are likely 2nd cousins.'
        )

        expect(whatRelation(18), "Did you change the third condition from: (percentageSharedDNA < 13) to: (percentageSharedDNA > 13)").to.equal('You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.')

        expect(whatRelation(100), "Did you change the third condition from: (percentageSharedDNA < 13) to: (percentageSharedDNA > 13)").to.equal('You are likely identical twins.')
    });
});

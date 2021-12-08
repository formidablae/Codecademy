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
        let howOld
        try {
            howOld = appModule.__get__("howOld");
        } catch (e) {
            expect(e, 'did you create howOld?\n').to.not.exist;
        }

        expect(howOld, "Did you create howOld as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(howOld, "Did you create howOld as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        let dateToday = new Date();
        let thisYear = dateToday.getFullYear();
        console.log(thisYear)


        const localHowOld = (age, year) => {
            const yearDifference = year - thisYear
            const newAge = age + yearDifference
            if (newAge < 0) {
                return `The year ${year} was ${-newAge} years before you were born`
            }
            if (newAge > age) {
                return `You will be ${newAge} in the year ${year}`
            }
            return `You were ${newAge} in the year ${year}`
        }

        expect(howOld(21, 2030), "If the year is in the future, the function should return 'You will be [calculated age] in the year [year passed in]'").to.equal(localHowOld(21, 2030))

        expect(howOld(3, 1998), "If the year passed in was before the person was born, the function should return: 'The year [year passed in] was [calculated number of years prior to their birth] years before you were born'").to.equal(localHowOld(3, 1998))

        expect(howOld(79, 2014), "If the year passed in is in the past, but not before the person was born, the function should return: 'You were [calculated age] in the year [year passed in].'").to.equal(localHowOld(79, 2014))
    });
});

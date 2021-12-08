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
        let toEmoticon

        try {
            toEmoticon = appModule.__get__("toEmoticon");
        } catch (e) {
            expect(e, 'Did you create toEmoticon?\n').to.not.exist;
        }

        expect(toEmoticon, "Did you create toEmoticon as either a function expression or a function declaration?").to.be.an.instanceOf(Function);
        // expect(toEmoticon, "Did you create toEmoticon as either a function expression or a function declaration? uuuuugh").to.be.a('function');

        expect(toEmoticon("shrug"), `If 'shrug' is entered, the function should return '|_{"}_|'`).to.equal('|_{"}_|')

        expect(toEmoticon("frowny face"), `If 'frowny face' is entered, the function should return ':('`).to.equal(':(')

        expect(toEmoticon("winky face"), `If 'winky face' is entered, the function should return ';)'`).to.equal(';)')

        expect(toEmoticon("heart"), `If 'heart' is entered, the function should return '<3'`).to.equal('<3')

        expect(toEmoticon("smiley face"), `If 'smiley face' is entered, the function should return ':)'`).to.equal(':)')

        expect(toEmoticon("random string"), `For any input other than 'shrug', 'frowny face', 'winky face', 'heart', or 'smiley face', your function should return '|_(* ~ *)_|'`).to.equal('|_(* ~ *)_|')

    });
});

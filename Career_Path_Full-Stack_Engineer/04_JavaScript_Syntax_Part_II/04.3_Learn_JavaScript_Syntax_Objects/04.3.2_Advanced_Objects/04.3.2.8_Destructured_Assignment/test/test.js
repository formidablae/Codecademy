console.log = function () { };
var rewire = require('rewire'),
    appModule = rewire('../main.js');
const { assert, expect } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureOne = function () {
            const robot = {
                model: '1E78V2',
                energyLevel: 100,
                functionality: {
                    beep() {
                        console.log('Beep Boop')
                    },
                    fireLaser() {
                        console.log('Pew Pew')
                    },
                }
            }
        };

        let structureTwo = function () {
            const { functionality } = robot;
        }

        let isMatchOne = Structured.match(code, structureOne);
        let isMatchTwo = Structured.match(code, structureTwo);

        assert.isOk(isMatchOne, 'Please don\'t change the `robot` object.')
        assert.isOk(isMatchTwo, 'Did you use destructed assignment to create a variable `functionality` that references `robot.functionality`?')
    });
    it('', function () {
        const functionality = appModule.__get__('functionality')

        expect(functionality.beep, "Did you use destructed assignment to create a variable `functionality` that references `robot.functionality`?").to.be.a('function');
        expect(functionality.fireLaser, "Did you use destructed assignment to create a variable `functionality` that references `robot.functionality`?").to.be.a('function');
    });
});

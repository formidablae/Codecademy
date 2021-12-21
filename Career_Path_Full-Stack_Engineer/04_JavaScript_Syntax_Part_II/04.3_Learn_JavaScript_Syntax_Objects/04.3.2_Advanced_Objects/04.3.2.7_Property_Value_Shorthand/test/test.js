console.log = function () { };
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
    it('', function () {
        let structureOne = function () {
            function robotFactory(model, mobile) {
                return {
                    model,
                    mobile,
                    beep() {
                        console.log('Beep Boop');
                    }
                }
            }
        };

        let structureTwo = function () {
            const robotFactory = (model, mobile) => {
                return {
                    model,
                    mobile,
                    beep() {
                        console.log('Beep Boop');
                    }
                }
            }
        };

        let structureThree = function () {
            let robotFactory = (model, mobile) => {
                return {
                    model,
                    mobile,
                    beep() {
                        console.log('Beep Boop');
                    }
                }
            }
        };

        let structureFour = function () {
            var robotFactory = (model, mobile) => {
                return {
                    model,
                    mobile,
                    beep() {
                        console.log('Beep Boop');
                    }
                }
            }
        };

        let structureFive = function () {
            const robotFactory = function (model, mobile) {
                return {
                    model,
                    mobile,
                    beep() {
                        console.log('Beep Boop');
                    }
                }
            }
        };

        let structureSix = function () {
            let robotFactory = function (model, mobile) {
                return {
                    model,
                    mobile,
                    beep() {
                        console.log('Beep Boop');
                    }
                }
            }
        };

        let structureSeven = function () {
            var robotFactory = function (model, mobile) {
                return {
                    model,
                    mobile,
                    beep() {
                        console.log('Beep Boop');
                    }
                }
            }
        };

        let isMatchOne = Structured.match(code, structureOne);
        let isMatchTwo = Structured.match(code, structureTwo);
        let isMatchThree = Structured.match(code, structureThree);
        let isMatchFour = Structured.match(code, structureFour);
        let isMatchFive = Structured.match(code, structureFive);
        let isMatchSix = Structured.match(code, structureSix);
        let isMatchSeven = Structured.match(code, structureSeven);

        const anyMatch = [isMatchOne, isMatchTwo, isMatchThree, isMatchFour, isMatchFive, isMatchSix, isMatchSeven].some(el => !!el)

        assert.isOk(anyMatch, 'Did you use property value shorthand to refactor properties in `robotFactory`?')
    });
});

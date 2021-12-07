console.log = function () { };
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');
const Calculate = require('../index.js')

const code = fs.readFileSync('index.js', 'utf8');

describe('', function () {
    it('', function () {

        const isMatch = code.match(/sum[\s\S]+reduce/g)



        let failureMessage = 'Did you `.reduce()` inside `Calculate.sum()`? ';

        // verify
        assert.isOk(isMatch, failureMessage);

        assert.equal(Calculate.sum([1, 2, 3, 4]), 10, "Did you return the total from your `.reduce` method")
    })
})

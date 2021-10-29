console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      gainedDollar++
    };

    let isMatchOne = Structured.match(code, structureOne);

    assert.isOk(isMatchOne, 'Did you use the increment operater, `++` to increase `gainedDollar` by 1?')
  });
});

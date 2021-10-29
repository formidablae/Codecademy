console.log = function() {};
const { assert } = require('chai');
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    let structureOne = function() {
      const entree = $entree
    };

    varCallbacks = [
      function($entree){
        if($entree.value !== 'Enchiladas'){
          return {failure: 'Did you assign `entree` a value of \'Enchiladas\'`?'}
        }
        return true
      }
    ]

    let isMatchOne = Structured.match(code, structureOne, { varCallbacks });
    assert.isOk(isMatchOne, varCallbacks.failure || 'Did you declare a variable named `entree` using the `const` keyword?');
  });
});

console.log = function() {};
const assert = require('chai').assert;
const fs = require('fs');
const Structured = require('structured');

const code = fs.readFileSync('main.js', 'utf8');

describe('', function () {
  it('', function() {
    
    const match = code.match(/console\.\s*log\s*\(\s*`[Mm]y\s+name\s+is\s+\$\{\s*(myName)\s*\}\s*(\.*\s*)[mM]y\s+favou*rite\s+city\s+is\s+\$\{\s*(myCity)\s*\}\.*`\s*\)/)
    assert.isOk(match, "Did you interpolate `myName` and `myCity` using back ticks and `${}`?")
 
  });
});
console.log = function() {};
var rewire = require('rewire'),
  appModule = rewire('../main.js');
const { expect } = require('chai');

describe('', function () {
  it('Did you use the `-=` operator to decrease `powerLevel` by `100`?', function() {
  	expect(appModule.__get__('powerLevel')).to.eql(8901);
  });
});

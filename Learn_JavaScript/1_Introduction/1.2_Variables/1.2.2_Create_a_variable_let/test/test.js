console.log = function() {};
var rewire = require('rewire'),
  appModule = rewire('../main.js');
       
describe('', function () {  
  it('Create a variable named changeMe.', function() {
  	expect(appModule.__get__('changeMe')).to.exist;
  });
  it('Set changeMe to true.', function() {
  	expect(appModule.__get__('changeMe')).to.eql(true);
  });
});

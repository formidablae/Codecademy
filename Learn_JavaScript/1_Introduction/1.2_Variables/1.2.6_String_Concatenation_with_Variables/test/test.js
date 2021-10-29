console.log = function() {};
var rewire = require('rewire'),
  appModule = rewire('../main.js');
 
describe('', function () {  
  it('Did you set a string as the `favoriteAnimal` variable\'s value?', function() {
  	expect(appModule.__get__('favoriteAnimal')).to.be.a('string');
  });
});
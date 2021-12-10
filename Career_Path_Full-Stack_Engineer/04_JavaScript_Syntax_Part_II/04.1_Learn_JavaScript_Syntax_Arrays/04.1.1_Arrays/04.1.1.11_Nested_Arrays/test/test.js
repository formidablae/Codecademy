console.log = function () { };
var rewire = require('rewire'),
    appModule = rewire('../main.js');
const { expect } = require('chai');

describe('', function () {
    it('Declare a `const numberClusters` and initalize it to `[]`.', function () {
        const numberClusters = appModule.__get__('numberClusters')
        expect(numberClusters, "Did you assign to `const numberClusters` an empty array?").to.deep.equal([]);
    });
});

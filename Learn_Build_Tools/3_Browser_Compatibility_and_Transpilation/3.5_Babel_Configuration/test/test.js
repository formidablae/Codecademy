console.log = () => {};
var packageConfig = require('../package.json');
const chai = require('chai');
const fs = require('fs');
const assert = chai.assert;
describe('', () => {
    it('', () => {
        assert.isOk(fs.existsSync("./package.json"), "Did you initialize the project?");
        assert.isDefined(packageConfig.scripts["build"], "Did you define a build command?");
        assert.propertyVal(packageConfig.scripts,"build","babel src -d out","Did you set the build command to run babel in **src** and to place its output in **out**?");
    });
});

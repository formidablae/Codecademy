console.log = () => { }
const { expect } = require('chai');
const rewire = require('rewire');
const Vue = require('vue');

describe('', function () {
    it('', function () {
        let appModule = rewire("../js/app.js");
        let vueApp = appModule.__get__("app");
        expect(vueApp).to.exist();
    });
});

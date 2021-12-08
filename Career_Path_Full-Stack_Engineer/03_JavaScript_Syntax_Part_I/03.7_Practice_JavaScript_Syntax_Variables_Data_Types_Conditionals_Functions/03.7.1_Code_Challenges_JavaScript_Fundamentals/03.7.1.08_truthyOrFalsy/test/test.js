console.log = function() {};
const {expect} = require('chai')
const rewire = require('rewire');
//var appModule = rewire("../main.js")

describe('', function () {
  it('', function() {
    try {
      var appModule = rewire("../main.js");
    } catch (e) {
    	expect(e, 'Double check your code. It likely has a syntax error.\n').to.not.exist;
    }
  	let truthyOrFalsy
    try {
      truthyOrFalsy = appModule.__get__("truthyOrFalsy");
    } catch (e) {
    	expect(e, 'did you create truthyOrFalsy?\n').to.not.exist;
    }

    expect(truthyOrFalsy, "Did you create truthyOrFalsy as either a function expression or a function declaration?").to.be.an.instanceOf(Function);    
    // expect(truthyOrFalsy, "Did you create truthyOrFalsy as either a function expression or a function declaration? uuuuugh").to.be.a('function');

    expect(truthyOrFalsy(false), "If an argument that evaluates to falsy is passed in to the function, the function should return false").to.equal(false)
    expect(truthyOrFalsy(0), "If an argument that evaluates to falsy is passed in to the function, the function should return false").to.equal(false)
    expect(truthyOrFalsy(""), "If an argument that evaluates to falsy is passed in to the function, the function should return false").to.equal(false)
    expect(truthyOrFalsy(''), "If an argument that evaluates to falsy is passed in to the function, the function should return false").to.equal(false)
    expect(truthyOrFalsy(null), "If an argument that evaluates to falsy is passed in to the function, the function should return false").to.equal(false)
    expect(truthyOrFalsy(undefined), "If an argument that evaluates to falsy is passed in to the function, the function should return false").to.equal(false)
    expect(truthyOrFalsy(NaN), "If an argument that evaluates to falsy is passed in to the function, the function should return false").to.equal(false)
    expect(truthyOrFalsy("true"), "If an argument that evaluates to truthy is passed in to the function, the function should return true").to.equal(true)
    expect(truthyOrFalsy(true), "If an argument that evaluates to truthy is passed in to the function, the function should return true").to.equal(true)
    expect(truthyOrFalsy(80), "If an argument that evaluates to truthy is passed in to the function, the function should return true").to.equal(true)
    expect(truthyOrFalsy(truthyOrFalsy), "If an argument that evaluates to truthy is passed in to the function, the function should return true").to.equal(true)
    expect(truthyOrFalsy({cat: "dog"}), "If an argument that evaluates to truthy is passed in to the function, the function should return true").to.equal(true)
    expect(truthyOrFalsy([]), "If an argument that evaluates to truthy is passed in to the function, the function should return true").to.equal(true)
    expect(truthyOrFalsy([false, false, false]), "If an argument that evaluates to truthy is passed in to the function, the function should return true").to.equal(true)
  });
});

const _ = require('../_.js');
const assert = require('./assert.js');

const TEST_NAME = '_.invert()';

assert.beginTestBlock(TEST_NAME);

assert.exists(TEST_NAME, '_.invert()', _.invert);

if (!_.invert) {
    assert.terminateTestBlock();
    return;
}

assert.equals(TEST_NAME, 'Returns an object with key and value inverted for a single key-value pair', '_.invert({originalKey: "originalValue"})["originalValue"])', _.invert({ originalKey: "originalValue" })['originalValue'], 'originalKey');
assert.equals(TEST_NAME, 'Original key is not present after the key-value pairs have been inverted', '_.invert({originalKey: "originalValue"})["originalKey"])', _.invert({ originalKey: "originalValue" })['originalKey'], undefined);
assert.equals(TEST_NAME, 'Returns an object with all keys and values inverted', '_.invert({originalKey: "originalValue"})["originalKey"])', _.invert({ originalKey: "originalValue", anotherKey: "anotherValue" })['anotherValue'], 'anotherKey');

assert.endTestBlock();
